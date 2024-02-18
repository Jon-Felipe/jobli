import styled from 'styled-components';

type Props = {};

function LoginRegisterForm({}: Props) {
  return (
    <Wrapper>
      <h3 className='login__title'>Login</h3>
      <p className='login__subtext'>Enter Login details to get access</p>
      <form className='login__form'>
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
          <p>Don't have an account? Sign Up here</p>
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
`;
