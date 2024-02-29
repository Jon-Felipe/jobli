import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';

// components
import FormRowInput from '../components/FormRowInput';

// extras
import { useAppDispatch } from '../utils/hooks';
import { setCredentials } from '../slices/authSlice';
import { LoginUserType } from '../utils/types';
import { useLoginMutation } from '../slices/usersApiSlice';

type Props = {};

function Login({}: Props) {
  const [user, setUser] = useState<LoginUserType>({ email: '', password: '' });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  async function handleLoginOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { email, password } = user;

    if (!email && !password) {
      toast.error('Please provide an email and password');
      return;
    }

    try {
      const { user } = await login({ email, password }).unwrap();
      dispatch(setCredentials(user));
      toast.success('Login successful');
      navigate('/');
    } catch (error: unknown) {
      if (
        typeof error === 'object' &&
        error &&
        'data' in error &&
        typeof error.data === 'object' &&
        error.data &&
        'msg' in error.data &&
        typeof error.data.msg === 'string'
      ) {
        toast.error(error.data.msg);
      }
    }
  }

  return (
    <Wrapper>
      <h3 className='login__title'>Login</h3>
      <p className='login__subtext'>Enter Login details to get acccess</p>
      <form onSubmit={handleLoginOnSubmit}>
        <FormRowInput
          label='email address'
          name='email'
          value={user.email}
          onChange={handleOnChange}
          type='email'
          placeholder='Email Address'
        />
        <FormRowInput
          name='password'
          value={user.password}
          onChange={handleOnChange}
          type='password'
          placeholder='Password'
        />
        <div className='login__actions'>
          <p>
            Don't have an account?{' '}
            <Link to='/register' className='login__signup'>
              Sign Up
            </Link>
          </p>
          <button type='submit' className='btn'>
            Login
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div`
  width: 80vw;
  max-width: var(--fixed-width);
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-2);
  padding: 2rem 2.5rem;
  margin: 3rem auto;
  .login__title {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .login__subtext {
    text-align: center;
    letter-spacing: var(--letter-spacing);
    color: var(--grey-500);
    margin-bottom: 2rem;
  }
  .login__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .login__signup {
    color: var(--primary-400);
  }
`;
