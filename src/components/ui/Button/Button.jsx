import React from "react";

import * as S from "./Button.styles.js";

const Button = ({ handleClick, isDisabled, children, color }) => {
  return (
    <S.Button
      disabled={isDisabled}
      onClick={handleClick}
      style={{ backgroundColor: color }}
    >
      {children}
    </S.Button>
  );
};

export default Button;
