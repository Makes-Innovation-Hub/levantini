import React from "react";
import * as S from "./QuestionsSequence.styles"; // Importing the styles from the new file

const QuestionsSequence = ({ children }) => {
  return <S.DotContainer>{children}</S.DotContainer>;
};

export default QuestionsSequence;
