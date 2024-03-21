import styled from 'styled-components';

// extras
import { SelectOptions } from '../utils/types';

type Props = {
  label?: string;
  name: string;
  value: React.SelectHTMLAttributes<HTMLSelectElement>['value'];
  onChange: React.SelectHTMLAttributes<HTMLSelectElement>['onChange'];
  options: SelectOptions[];
};

function Select({ label, name, value, onChange, options }: Props) {
  return (
    <Wrapper>
      {label && <label htmlFor={name}>{label}</label>}
      <select id={name} name={name} value={value} onChange={onChange}>
        {options.map((item) => (
          <option key={item.id} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </Wrapper>
  );
}

export default Select;

const Wrapper = styled.div`
  width: 100%;
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
    font-size: 0.8rem;
    letter-spacing: var(--letter-spacing);
    color: var(--grey-600);
    cursor: pointer;
    &::placeholder {
      text-transform: capitalize;
    }
  }
`;
