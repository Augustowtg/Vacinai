import React from 'react';

import { ButtonStyled } from './styles';

function Button(props) {
  return (
      <ButtonStyled bgColor={props.bgColor}>
          {props.children}
      </ButtonStyled>
  );
}

export default Button;