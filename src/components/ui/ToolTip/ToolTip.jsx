import React from "react";
import * as S from "./ToolTip.styles";

const ToolTip = ({ children, position }) => {
  let leftPosition;
  let carrotPosition;
  switch (position) {
    case "left":
      leftPosition = "49px";
      carrotPosition = "6%";
      break;
    case "right":
      leftPosition = "-117px";
      carrotPosition = "86%";
      break;
    default:
      null;
  }

  return (
    <S.ToolTipWrapper left={leftPosition} carrotPosition={carrotPosition}>
      {" "}
      {children}
    </S.ToolTipWrapper>
  );
};

export default ToolTip;
