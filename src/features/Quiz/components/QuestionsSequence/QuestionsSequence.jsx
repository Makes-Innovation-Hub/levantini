import React from "react";
import * as S from "./QuestionsSequence.styles"; // Importing the styles from the new file

const QuestionsSequence = ({ children }) => {
  return <S.SequenceContainer>{children}</S.SequenceContainer>;
};

export default QuestionsSequence;
