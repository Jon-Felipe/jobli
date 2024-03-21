import styled from 'styled-components';

// extras
import { Select as SelectType } from '../utils/types';

type Props = {
  label?: string;
  name: string;
  values: SelectType[];
};

function Select({ label, name, values }: Props) {
  return (
    <Wrapper>
      {label && <label htmlFor={name}>{label}</label>}
      <select name={name} id={name}>
        {values.map((item) => (
          <option key={item.id}>{item.title}</option>
        ))}
      </select>
    </Wrapper>
  );
}

export default Select;

const Wrapper = styled.div`
  label {
    display: block;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: var(--letter-spacing);
    margin-bottom: 1rem;
  }
  select {
    display: block;
    width: 100%;
    text-transform: capitalize;
    padding: 1rem;
    border: 1px solid var(--grey-300);
    border-radius: var(--border-radius);
    background-color: var(--white);
    font-size: 0.85rem;
    letter-spacing: var(--letter-spacing);
    color: var(--grey-600);
    cursor: pointer;
    &::placeholder {
      text-transform: capitalize;
    }
  }
`;
