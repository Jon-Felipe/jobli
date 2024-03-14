import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaTimes, FaBars, FaRegUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';

// extras
import { useAppDispatch, useAppSelector } from '../utils/hooks';

type Props = {};

function Navbar({}: Props) {
  const [showNavLinks, setShowNavLinks] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((state) => state.auth);

  const [logoutApiCall] = useLogoutMutation();

  async function logoutHandler() {
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
      <h4 className='nav__title'>Jobli</h4>
      <div
        className='nav__toggle'
        onClick={() => setShowNavLinks(!showNavLinks)}
      >
        {showNavLinks ? <FaTimes /> : <FaBars />}
      </div>
      <ul className='nav__links'>
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
        {userInfo.firstName ? (
          <>
            <li>
              <Link to='/profile' className='nav__link-profile'>
                Profile <FaRegUserCircle />
              </Link>
            </li>
            <button onClick={logoutHandler} className='nav__link-logout'>
              Logout <FaSignOutAlt />
            </button>
          </>
        ) : (
          <>
            <li>
              <Link to='/login' className='nav__link-login'>
                Login
              </Link>
            </li>
            <li>
              <Link to='/register' className='nav__link-register'>
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto;
  max-width: 1320px;
  margin: 0 auto;
  padding: 2rem 1rem;
  .nav__title {
    font-size: 1.5rem;
    font-weight: 700;
  }
  .nav__toggle {
    svg {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  }
  .nav__links {
    display: none;
  }
  @media (min-width: 1024px) {
    .nav__toggle {
      display: none;
    }
    .nav__links {
      display: flex;
      align-items: center;
      column-gap: 1.5rem;
      a {
        letter-spacing: var(--letter-spacing);
      }
    }
    .nav__link-login {
      background-color: var(--primary-500);
      color: var(--white);
      padding: 0.7rem 2rem;
      border-radius: 5px;
      margin-left: 2rem;
    }
    .nav__link-register {
      background-color: var(--primary-800);
      color: var(--white);
      padding: 0.7rem 2rem;
      border-radius: 5px;
    }
    .nav__link-profile {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
      margin-left: 2rem;
    }
    .nav__link-logout {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
      background-color: transparent;
      border: none;
      font-size: 1rem;
      letter-spacing: var(--letter-spacing);
      cursor: pointer;
    }
  }
`;
