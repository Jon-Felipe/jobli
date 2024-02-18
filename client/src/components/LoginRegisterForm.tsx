import { useState } from 'react';
import styled from 'styled-components';

type Props = {};

function LoginRegisterForm({}: Props) {
  const [isRegister, setIsRegister] = useState<boolean>(false);

  return (
    <Wrapper>
      <h3 className='login__title'>{isRegister ? 'Register' : 'Login'}</h3>
      <p className='login__subtext'>
        {isRegister ? 'Create an account ' : 'Enter Login details '}
        to get access
      </p>
      <form className='login__form'>
        {isRegister && (
          <div className='form-row'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Enter Name'
              className='form-input'
            />
          </div>
        )}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email Address
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email Address'
            className='form-input'
          />
        </div>
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter Password'
            className='form-input'
          />
        </div>
        <div className='login__actions'>
          <p>
            {isRegister ? 'Have an account? ' : ` Don't have an account? `}
            <span
              className='login__actions-register'
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister ? 'Sign In' : 'Sign Up'}
            </span>{' '}
            here
          </p>
          <button type='submit' className='btn'>
            Login
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default LoginRegisterForm;

const Wrapper = styled.section`
  text-align: center;
  .login__title {
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 2.5rem;
  }
  .login__subtext {
    letter-spacing: var(--letter-spacing);
    color: var(--grey-500);
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
  .login__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 0.85rem;
      letter-spacing: var(--letter-spacing);
    }
  }
  .login__actions-register {
    color: var(--primary-500);
    cursor: pointer;
  }
`;
