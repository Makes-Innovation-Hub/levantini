import React from "react";
import * as S from "./Button.styles.js";

const Button = ({ handleClick, children, color }) => {
  return (
    <S.Button onClick={handleClick} style={{ backgroundColor: color }}>
      {children}
    </S.Button>
  );
};

export default Button;