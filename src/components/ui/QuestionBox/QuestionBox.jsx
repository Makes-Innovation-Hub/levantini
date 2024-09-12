import React, { useState } from "react";
import Button from "../Button/Button";
import * as S from "./QuestionBox.style.js";
import dummyData from "../../../api/dummyData"; 

const QuestionBox = () => {
  const questionData = dummyData[0].questions[0];

  const [answerColors, setAnswerColors] = useState(Array(4).fill("var(--blue--)"));
  const [isAnswered, setIsAnswered] = useState(false);

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

  if (!questionData) return <p>No question data available</p>;

  return (
    <S.QuestionBox>
      <p>{questionData.question}</p>
      {questionData.answers.map((answer, index) => (
        <Button
          key={index}
          handleClick={() => handleAnswerClick(index)}
          color={answerColors[index]}
        >
          {answer}
        </Button>
      ))}
    </S.QuestionBox>
  );
};

export default QuestionBox;