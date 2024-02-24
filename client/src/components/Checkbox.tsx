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
  margin: 0.85rem 0;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  input {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
  label {
    text-transform: capitalize;
    font-size: 1.15rem;
    letter-spacing: var(--letter-spacing);
  }
`;
