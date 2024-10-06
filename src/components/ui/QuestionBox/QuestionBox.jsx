import React from "react";
import Button from "../Button/Button";
import YouTubePlayer from "../VideoQuestion/YouTubePlayer.jsx";
import * as S from "./QuestionBox.style.js";

// Utility to extract the video ID from YouTube URL
const extractYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const QuestionBox = ({
  handleOnClick,
  questionData,
  answerColors,
  notification,
  handleNextQuestion,
  handleQuestionTimeOut,
}) => {
  if (!questionData) return <p>No question data available</p>;

  const renderExplanation = (explanation) => {
    return explanation.map((sentence, index) => (
      <span key={index}>
        {sentence}
        <br />
      </span>
    ));
  };

  const videoId =
    questionData.questionType === "video" && questionData.video
      ? extractYouTubeVideoId(questionData.video)
      : null;

  return (
    <S.QuestionBoxFirst>
      <S.QuestionBoxSecond>
        <h2>{questionData.question}</h2>

        {questionData.questionType === "image" && (
          <S.Image src={questionData.image} alt="Question" />
        )}
        {questionData.questionType === "text" && <p>{questionData.text}</p>}
        {questionData.questionType === "video" && videoId && (
          <YouTubePlayer videoId={videoId} width="330" height="255" />
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
    </S.QuestionBoxFirst>
  );
};
export default QuestionBox;
