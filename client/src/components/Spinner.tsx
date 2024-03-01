import styled from 'styled-components';

type Props = {};

function Spinner({}: Props) {
  return <Wrapper></Wrapper>;
}

export default Spinner;

const Wrapper = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 4rem auto;
  border: 5px solid var(--grey-400);
  border-radius: 50%;
  border-top-color: var(--primary-500);
  animation: spinner 0.6s linear infinite;
`;
