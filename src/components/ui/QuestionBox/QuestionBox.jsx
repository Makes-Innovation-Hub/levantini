import React, { useState } from "react";
import { StyledQuestionBox } from "./QuestionBox.style";
import dummyData from "../../../api/dummyData";
import { AnswerButton } from "../QuestionBox/QuestionBox.style";

const QuestionBox = () => {
  const [answerColors, setAnswerColors] = useState(
    Array(4).fill("var(--color-for-pre-answer)"),
  );
  const [isAnswered, setIsAnswered] = useState(false);

  const questionData = dummyData[0].questions[0];

  const handleAnswerClick = (index) => {
    if (isAnswered) return; // If already answered, do nothing

    const updatedColors = [...answerColors];

    if (index === questionData.correctAnswer) {
      updatedColors[index] = "var(--color-for-correct-answer)";
    } else {
      updatedColors[index] = "var(--color-for-wrong-answer)";
      updatedColors[questionData.correctAnswer] = "var(--color-for-correct-answer)";
    }

    setAnswerColors(updatedColors);
    setIsAnswered(true);
  };

  return (
    <StyledQuestionBox>
      <p>{questionData.question}</p>
      {questionData.answers.map((answer, index) => (
        <AnswerButton
          key={index}
          onClick={() => handleAnswerClick(index)}
          style={{
            backgroundColor: answerColors[index],
          }}
        >
          {answer}
        </AnswerButton>
      ))}
    </StyledQuestionBox>
  );
};

export default QuestionBox;
