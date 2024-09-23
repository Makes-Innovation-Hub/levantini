import React from "react";
import * as S from "./DoteSequence.styles"; // Importing the styles from the new file

const Dot = ({ backgroundColor, borderColor, bold, transparent }) => {
  return (
    <S.StyledDot
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      bold={bold}
      transparent={transparent}
    />
  );
};

export default Dot;
