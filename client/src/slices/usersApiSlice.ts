import { apiSlice } from './apiSlice';

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: '/api/v1/auth/register',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation } = usersApiSlice;
