import React from "react";

import YouTubePlayer from "../../../../lib/YouTubePlayer/YouTubePlayer.jsx";
import * as S from "./QuestionBox.style.js";

export const QuestionBox = ({
  handleOnClick,
  questionData,
  answerColors,
  notification,
  handleNextQuestion,
  handleQuestionTimeOut,
  children,
}) => {
  if (!questionData) return <p>No question data available</p>;
  console.log({ questionData });

  const renderExplanation = (explanation) => {
    return explanation.map((sentence, index) => (
      <span key={index}>
        {sentence}
        <br />
      </span>
    ));
  };

  const renderQuestionType = () => {
    switch (questionData.questionType) {
      case "video":
        return (
          <div>
            <YouTubePlayer url={questionData.video} width="330" height="255" />;
          </div>
        );

      case "image":
        return (
          <div>
            <img
              src={questionData.image}
              alt={questionData.explanation}
              width="182px"
              height="255px"
            />
          </div>
        );

      case "text":
        return (
          <div>
            <p>{questionData.text}</p>{" "}
          </div>
        );

      default:
        null;
    }
  };

  return (
    <S.QuestionBoxFirst>
      <S.QuestionBoxSecond>
        <h2>{questionData.question}</h2>
        {renderQuestionType()}

        <div className="answers">
          {children}
          {/* {questionData.answers.map((answer, index) => {
            console.log({ index });
            return (
              <Button
                key={index}
                handleClick={() => handleOnClick(index)}
                color={answerColors[index]}
              >
                {answer}
              </Button>
            );
          })} */}
        </div>
      </S.QuestionBoxSecond>
    </S.QuestionBoxFirst>
  );
};
export default QuestionBox;
