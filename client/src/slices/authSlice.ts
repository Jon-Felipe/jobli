import { createSlice } from '@reduxjs/toolkit';
import { UserPayload } from '../utils/types';

interface UserState {
  userInfo: UserPayload;
}

const initialState: UserState = {
  userInfo: { _id: '', email: '', firstName: '', lastName: '' },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.userInfo = { _id: '', email: '', firstName: '', lastName: '' };
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
