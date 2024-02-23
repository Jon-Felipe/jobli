import React from 'react';
import styled from 'styled-components';

type Props = {
  name: string;
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
};

function FormRowInput({ name, label, type, placeholder }: Props) {
  return (
    <Wrapper>
      <label htmlFor={name}>{label || name}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} />
    </Wrapper>
  );
}

export default FormRowInput;

const Wrapper = styled.div``;
