import React, { useState } from "react";
import { StyledQuestionBox } from "./QuestionBox.style";
import dummyData from "../../../api/dummyData";
import { AnswerButton } from "../QuestionBox/QuestionBox.style";

const QuestionBox = () => {
  const [answerColors, setAnswerColors] = useState(Array(4).fill("var(--blue--)"));
  const [isAnswered, setIsAnswered] = useState(false);

  const questionData = dummyData[0].questions[0];

  const handleAnswerClick = (index) => {
    if (isAnswered) return; // If already answered, do nothing

    const updatedColors = [...answerColors];

    if (index === questionData.correctAnswer) {
      updatedColors[index] = "var(--green--)";
    } else {
      updatedColors[index] = "var(--red--)";
      updatedColors[questionData.correctAnswer] = "var(--green--)";
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
