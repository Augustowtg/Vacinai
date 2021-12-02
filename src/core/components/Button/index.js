import React from 'react';

import { ButtonStyled } from './styles';

function Button(props) {
  return (
      <ButtonStyled>
          {props.children}
      </ButtonStyled>
  );
}

export default Button;