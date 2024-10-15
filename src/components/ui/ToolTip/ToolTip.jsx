import React from "react";
import * as S from "./ToolTip.styles";

const ToolTip = ({ children, postion }) => {
  let transformValuel;
  let carrotValue;
  switch (postion) {
    case "left":
      transformValuel = "-100px";
      carrotValue = "-50px";
      break;
    case "right":
      transformValuel = "400px";
      carrotValue = "150px";
      break;
    default:
      null;
  }
  return <S.ToolTipWrapper postion={postion}> {children}</S.ToolTipWrapper>;
};

export default ToolTip;
