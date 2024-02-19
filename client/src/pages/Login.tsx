import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {};

function Login({}: Props) {
  return (
    <Wrapper>
      <h3 className='login__title'>Login</h3>
      <p className='login__subtext'>Enter Login details to get acccess</p>
      <form>
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
            Don't have an account?{' '}
            <Link to='/register' className='login__signup'>
              Sign Up
            </Link>
          </p>
          <button className='btn'>Login</button>
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
