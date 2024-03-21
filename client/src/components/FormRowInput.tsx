import React from 'react';
import styled from 'styled-components';

type Props = {
  label?: string;
  name: string;
  value: React.InputHTMLAttributes<HTMLInputElement>['value'];
  onChange: React.InputHTMLAttributes<HTMLInputElement>['onChange'];
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
};

function FormRowInput({
  label,
  name,
  value,
  onChange,
  type,
  placeholder,
}: Props) {
  return (
    <Wrapper>
      <label htmlFor={name}>{label || name}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Wrapper>
  );
}

export default FormRowInput;

const Wrapper = styled.div`
  margin: 1.25rem 0;
  width: 100%;
  label {
    display: block;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: var(--letter-spacing);
    margin-bottom: 1rem;
  }
  input {
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid var(--grey-300);
    border-radius: var(--border-radius);
    background-color: var(--white);
    font-size: 0.8rem;
    letter-spacing: var(--letter-spacing);
    &::placeholder {
      text-transform: capitalize;
      color: var(--grey-600);
    }
  }
`;
