import React, { useState, useCallback } from "react";
import * as S from "../Quiz/Quiz.styled.js";
import QuestionBox from "../../features/Quiz/components/QuestionBox/index.js";
import Notification from "../../components/ui/Notification/Notification.jsx";
import useQuestionBox from "../../features/Quiz/hooks/useQuestionBox.js";
import Timer from "../../features/Quiz/components/Timer/Timer.jsx";
import Button from "../../components/ui/Button/Button.jsx";

import QuestionsSequence from "../../features/Quiz/components/QuestionsSequence/QuestionsSequence.jsx";
import { DotSequence } from "../../features/Quiz/components/DoteSequence/DoteSequence.styles.js";

const Quiz = () => {
  const {
    notification,
    handleQuestionTimeOut,
    handleAnswerClick,
    questionData,
    answerColors,
    handleNextQuestion,
    currentCategory,
    currentQuestionIndex,
    setCurrentQuestionIndex,
  } = useQuestionBox();

  const [questionStatus, setQuestionStatus] = useState(
    Array(currentCategory.questions.length).fill("unanswered"),
  );

  const [isAnswerClicked, setIsAnswerClicked] = useState(false);

  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const handleOnClick = (index) => {
    handleAnswerClickWithStatus(index);
  };

  const renderExplanation = (explanation) => {
    if (!explanation || !Array.isArray(explanation)) return null;

    return explanation.map((sentence, index) => {
      const splitSentences = sentence.split(",").map((part, i) => (
        <span key={`${index}-${i}`}>
          {part.trim()}
          {i !== sentence.split(",").length - 1 && <br />}{" "}
        </span>
      ));
      return <div key={index}>{splitSentences}</div>;
    });
  };

  // Update the question status on answer click (either correct or incorrect)
  const handleAnswerClickWithStatus = (answerIndex) => {
    const isCorrect = answerIndex === questionData.correctAnswer;
    // console.log({ isCorrect });

    const updatedStatus = [...questionStatus];
    // console.log("before", updatedStatus);

    updatedStatus[currentQuestionIndex] = isCorrect ? "correct" : "incorrect";
    console.log("after", updatedStatus);
    setQuestionStatus(updatedStatus);

    // console.log("Updated status after click:", updatedStatus);

    // Mark that an answer has been clicked
    // setIsAnswerClicked(true);

    // Proceed with original answer click handling
    handleAnswerClick(isCorrect, answerIndex);
  };

  const handleQuestionTimeOutWithStatus = useCallback(
    (questionIndex) => {
      // if (!isAnswerClicked) {
      const updatedStatus = [...questionStatus];
      updatedStatus[questionIndex] = "timeout"; // Mark the status as timeout
      setQuestionStatus(updatedStatus);

      console.log("Updated status after timeout:", updatedStatus);

      handleQuestionTimeOut(questionIndex); // Proceed with original logic
      // }
    },
    [isAnswerClicked, questionStatus, handleQuestionTimeOut],
  );

  console.log(" hiiii", notification);
  return (
    <S.main>
      <QuestionBox
        // handleOnClick={handleOnClick}
        handleOnClick={handleAnswerClickWithStatus}
        questionData={questionData}
        answerColors={answerColors}
        notification={notification}
        handleQuestionTimeOut={handleQuestionTimeOutWithStatus}
        // handleNextQuestion={handleNextQuestionWithReset}
      >
        {questionData?.answers?.map((answer, index) => {
          console.log({ index });
          return (
            <Button
              key={index}
              handleClick={() => handleAnswerClickWithStatus(index)}
              color={answerColors[index]}
            >
              {answer}
            </Button>
          );
        })}
      </QuestionBox>
      {/* Use the currentQuestionIndex as a key to remount Timer on each new question */}
      <Timer
        key={currentQuestionIndex} // Forces remount of Timer when this key changes
        duration={2}
        onTimerEnd={() => handleQuestionTimeOutWithStatus(currentQuestionIndex)}
      />
      <QuestionsSequence>
        {currentCategory.questions.map((question, index) => (
          <DotSequence
            key={index}
            status={
              index === currentQuestionIndex ? "current" : questionStatus[index] // Set status based on answer or current question
            }
          />
        ))}
      </QuestionsSequence>

      <Notification
        isOpen={!!notification}
        title={notification?.title}
        color={notification?.color}
        explanation={renderExplanation(notification?.explanation)}
        handleNextQuestion={handleNextQuestion}
      />
    </S.main>
  );
};

export default Quiz;
