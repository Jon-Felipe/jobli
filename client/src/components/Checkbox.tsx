import styled from 'styled-components';

type Props = {
  name: string;
  label?: string;
};

function Checkbox({ name, label }: Props) {
  return (
    <Wrapper>
      <input type='checkbox' name={name} id={name} />
      <label htmlFor={name}>{label || name}</label>
    </Wrapper>
  );
}

export default Checkbox;

const Wrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  input {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
  label {
    font-size: 0.85rem;
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
  }
`;
