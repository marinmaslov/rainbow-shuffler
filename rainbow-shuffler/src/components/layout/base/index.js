import React from 'react';
import Displayer from '../../Displayer/Displayer/index'

import styled from 'styled-components';

const BaseContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function Base() {
  return (
    <BaseContainer>
      <Displayer/>
    </BaseContainer>
  );
}

export default Base;