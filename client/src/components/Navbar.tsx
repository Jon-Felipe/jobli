import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {};

function Navbar({}: Props) {
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
          <Link to='/'>Jobs</Link>
        </li>
        <li>
          <Link to='/'>Contact</Link>
        </li>
      </ul>
      <Link to='/login' className='btn nav-btn'>
        Join Now
      </Link>
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
