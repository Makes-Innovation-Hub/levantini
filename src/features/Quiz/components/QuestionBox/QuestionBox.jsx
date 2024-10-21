import React from "react";

import YouTubePlayer from "../../../../lib/YouTubePlayer/YouTubePlayer.jsx";
import * as S from "./QuestionBox.style.js";
import { useQuizContext } from "../../context/QuizContext.jsx";

export const QuestionBox = ({ children }) => {
  const { questionData } = useQuizContext();
  if (!questionData) return <p>No question data available</p>;

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
          // <TextQuestionType text={questionData.text} />
          <main>
            <p>{questionData.text}</p>{" "}
          </main>
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

        <div className="answers">{children}</div>
      </S.QuestionBoxSecond>
    </S.QuestionBoxFirst>
  );
};
export default QuestionBox;
