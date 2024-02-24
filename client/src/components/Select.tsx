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
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--grey-200);
  font-size: 0.85rem;
  text-transform: capitalize;
  letter-spacing: var(--letter-spacing);
  cursor: pointer;
`;
