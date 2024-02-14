import styled from 'styled-components';

type Props = {};

function Navbar({}: Props) {
  return (
    <Wrapper>
      <h2>Jobli</h2>
      <ul className='nav-links'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Job</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
      <button type='button' className='btn'>
        Join Now
      </button>
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
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr auto;
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
