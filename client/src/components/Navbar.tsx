import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';

// extras
import { useAppDispatch, useAppSelector } from '../utils/hooks';

type Props = {};

function Navbar({}: Props) {
  const [showUserOptions, setShowUserOptions] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((state) => state.auth);

  const [logoutApiCall] = useLogoutMutation();

  async function onLogoutClick() {
    try {
      await logoutApiCall({}).unwrap();
      dispatch(logout());
      toast.success('Logged out successfully');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Wrapper>
      <h2>Jobli</h2>
      <ul className='nav-links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/'>About</Link>
        </li>
        <li>
          <Link to='/jobs'>Jobs</Link>
        </li>
        <li>
          <Link to='/'>Contact</Link>
        </li>
      </ul>
      {userInfo._id ? (
        <div className='nav__user'>
          <button
            type='button'
            onClick={() => setShowUserOptions(!showUserOptions)}
            className='nav__btn--toggle'
          >
            Welcome {`${userInfo.firstName} ${userInfo.lastName}`}
            <span>{showUserOptions ? <FaCaretUp /> : <FaCaretDown />}</span>
          </button>
          {showUserOptions && (
            <div className='nav__user-options'>
              <Link to='/' className='nav__user-options-link'>
                My Profile
              </Link>
              <button
                type='button'
                onClick={onLogoutClick}
                className='nav__user-options-btn'
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link to='/login' className='btn nav-btn'>
          Join Now
        </Link>
      )}
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  height: 5rem;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 2rem;
  .nav-links {
    display: none;
  }
  .nav-btn {
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    font-weight: bold;
  }
  .nav__user {
    position: relative;
  }
  .nav__btn--toggle {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: var(--letter-spacing);
    cursor: pointer;
  }
  .nav__user-options {
    position: absolute;
    top: 30px;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }
  .nav__user-options-link {
    font-size: 1rem;
    letter-spacing: var(--letter-spacing);
  }
  .nav__user-options-btn {
    background-color: transparent;
    border: none;
    text-align: left;
    font-size: 1rem;
    letter-spacing: var(--letter-spacing);
    cursor: pointer;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 3fr auto;
    .nav-links {
      display: flex;
      align-items: center;
      column-gap: 20px;
      a {
        font-size: 1.25rem;
        font-weight: 500;
      }
    }
  }
`;
