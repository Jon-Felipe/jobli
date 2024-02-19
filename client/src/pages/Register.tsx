import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Wrapper>
      <h3 className='register__title'>Register</h3>
      <p className='register__subtext'>Create an account to get full access</p>
      <form>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            className='form-input'
          />
        </div>
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
        <div className='form-row'>
          <label htmlFor='confirmPassword' className='form-label'>
            Confirm Password
          </label>
          <input
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            placeholder='Confirm Password'
            className='form-input'
          />
        </div>
        <div className='register__actions'>
          <p>
            Already have an account?{' '}
            <Link to='/login' className='register__signin'>
              Sign In
            </Link>
          </p>
          <button className='btn'>Register</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.div`
  width: 80vw;
  max-width: var(--fixed-width);
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-2);
  padding: 2rem 2.5rem;
  margin: 3rem auto;
  .register__title {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .register__subtext {
    text-align: center;
    letter-spacing: var(--letter-spacing);
    color: var(--grey-500);
    margin-bottom: 2rem;
  }
  .register__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .register__signin {
    color: var(--primary-400);
  }
`;
