import styled from 'styled-components';

// extras
import { Select as SelectType } from '../utils/types';

type Props = {
  name: string;
  values: SelectType[];
};

function Select({ name, values }: Props) {
  return (
    <Wrapper name={name} id={name}>
      {values.map((item) => (
        <option key={item.id}>{item.title}</option>
      ))}
    </Wrapper>
  );
}

export default Select;

const Wrapper = styled.select`
  display: block;
  width: 100%;
  border: 1px solid var(--grey-300);
  border-radius: var(--border-radius);
  background-color: var(--grey-50);
  font-size: 0.85rem;
  letter-spacing: var(--letter-spacing);
  padding: 1rem;
  text-transform: capitalize;
  cursor: pointer;
`;
