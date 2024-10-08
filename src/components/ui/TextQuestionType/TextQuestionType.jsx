import React from "react";
import * as S from "./TextQuestionType.styles";
const TextQuestion = ({ question, text }) => {
  // const [userAnswer, setUserAnswer] = useState("");
  // const handleInputChange = (e) => {
  //   setUserAnswer(e.target.value);
  // };
  return (
    <S.TextQuestionType>
      <p>{question}</p>
      <S.Text>{text}</S.Text>
    </S.TextQuestionType>
  );
};
export default TextQuestion;
