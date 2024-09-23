import React from "react";
import Button from "../Button/Button";
import * as S from "./QuestionBox.style.js";

const QuestionBox = ({
  handleOnClick,
  questionData,
  answerColors,
  notification,
  handleNextQuestion,
  handleQuestionTimeOut,
}) => {
  if (!questionData) return <p>No question data available</p>;
  console.log({ notification });

  // Function to render explanation with each sentence on a new line without gaps
  const renderExplanation = (explanation) => {
    return explanation.map((sentence, index) => (
      <span key={index}>
        {sentence}
        <br /> {/* Add a line break between sentences */}
      </span>
    ));
  };
  return (
    <S.QuestionBoxFirst>
      <S.QuestionBoxSecond>
        <h2>{questionData.question}</h2>

        {questionData.questionType === "image" && (
          <S.Image src={questionData.image} alt="Question" />
        )}
        {questionData.questionType === "text" && <p>{questionData.text}</p>}
        {questionData.questionType === "video" && (
          <video width="320" height="240" controls>
            <source src={questionData.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <div className="answers">
          {questionData.answers.map((answer, index) => (
            <Button
              key={index}
              handleClick={() => handleOnClick(index)}
              color={answerColors[index]}
            >
              {answer}
            </Button>
          ))}
        </div>
      </S.QuestionBoxSecond>

      {/* {notification && (
        <Notification
          title={notification.title}
          color={notification.color}
          explanation={notification.explanation}
          handleNextQuestion={handleNextQuestion}
        />
      )} */}
    </S.QuestionBoxFirst>
  );
};

export default QuestionBox;
