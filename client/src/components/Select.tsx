import React from 'react';
import styled from 'styled-components';

type Props = {};

function Select({}: Props) {
  return (
    <Wrapper>
      <select name='' id=''>
        <option value=''>select option</option>
      </select>
    </Wrapper>
  );
}

export default Select;

const Wrapper = styled.div``;
