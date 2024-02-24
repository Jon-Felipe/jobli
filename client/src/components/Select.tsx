import styled from 'styled-components';

type Props = {
  name: string;
  values: string[];
};

function Select({ name, values }: Props) {
  return (
    <Wrapper name={name} id={name}>
      {values.map((item, i) => (
        <option key={i}>{item}</option>
      ))}
    </Wrapper>
  );
}

export default Select;

const Wrapper = styled.select`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--grey-200);
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: var(--letter-spacing);
  cursor: pointer;
`;
