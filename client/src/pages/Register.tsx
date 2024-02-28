import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRegisterMutation } from '../slices/usersApiSlice';

// components
import FormRowInput from '../components/FormRowInput';

// extras
import { RegisterUserType } from '../utils/types';

const Register = () => {
  const [user, setUser] = useState<RegisterUserType>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [register] = useRegisterMutation();

  function handleInputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  async function handleRegisterOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } = user;
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        await register({ firstName, lastName, email, password }).unwrap();
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
          console.log(error, 'erorr');
        }
      }
    }
  }

  return (
    <Wrapper>
      <h3 className='register__title'>Register</h3>
      <p className='register__subtext'>Create an account to get full access</p>
      <form onSubmit={handleRegisterOnSubmit}>
        <FormRowInput
          label='first name'
          name='firstName'
          value={user.firstName}
          onChange={handleInputOnChange}
          type='text'
          placeholder='first name'
        />
        <FormRowInput
          label='last name'
          name='lastName'
          value={user.lastName}
          onChange={handleInputOnChange}
          type='text'
          placeholder='last name'
        />
        <FormRowInput
          label='email address'
          name='email'
          value={user.email}
          onChange={handleInputOnChange}
          type='email'
          placeholder='email address'
        />
        <FormRowInput
          label='password'
          name='password'
          value={user.password}
          onChange={handleInputOnChange}
          type='password'
          placeholder='password'
        />
        <FormRowInput
          label='confirm password'
          name='confirmPassword'
          value={user.confirmPassword}
          onChange={handleInputOnChange}
          type='password'
          placeholder='confirm password'
        />
        <div className='register__actions'>
          <p>
            Already have an account?{' '}
            <Link to='/login' className='register__signin'>
              Sign In
            </Link>
          </p>
          <button type='submit' className='btn'>
            Register
          </button>
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
