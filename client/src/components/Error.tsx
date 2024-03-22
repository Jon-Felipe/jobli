import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Error() {
  return (
    <Wrapper>
      <h3>An Error occured</h3>
      <Link to={'/'}>Go Back</Link>
    </Wrapper>
  );
}

export default Error;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;
  min-height: 50vh;
  h3 {
    font-size: 2rem;
    font-weight: 500;
  }
  a {
    background-color: var(--secondary-500);
    color: var(--white);
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius-1);
    cursor: pointer;
  }
`;
