import React, { useState, useCallback } from "react";
import QuestionBox from "../components/ui/QuestionBox";
import Notification from "../components/ui/Notification/Notification";
import useQuestionBox from "../features/Quiz/hooks/useQuestionBox";
import Timer from "../components/ui/Timer/Timer";
import Dot from "../components/ui/DoteSequence/DoteSequence";
import QuestionsSequence from "../components/ui/QuestionsSequence/QuestionsSequence.jsx";
import { DotSequence } from "../components/ui/DoteSequence/DoteSequence.styles.js";

const QuestionPage = () => {
  const {
    notification,
    handleQuestionTimeOut,
    handleAnswerClick,
    questionData,
    answerColors,
    handleNextQuestion,
    currentCategory,
  } = useQuestionBox();

  // State to track the status of each question (correct, incorrect, unanswered)
  const [questionStatus, setQuestionStatus] = useState(
    Array(questionData.length).fill("unanswered"),
  );

  // State to track if an answer is clicked
  const [isAnswerClicked, setIsAnswerClicked] = useState(false);

  // State to track current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Function to split explanation at commas and display on new lines without extra gaps
  const renderExplanation = (explanation) => {
    if (!explanation || !Array.isArray(explanation)) return null;

    return explanation.map((sentence, index) => {
      // Split each sentence at commas and map them to new lines without gaps
      const splitSentences = sentence.split(",").map((part, i) => (
        <span key={`${index}-${i}`}>
          {part.trim()}
          {i !== sentence.split(",").length - 1 && <br />}{" "}
          {/* Adds line break except for the last part */}
        </span>
      ));
      return <div key={index}>{splitSentences}</div>;
    });
  };

  // Update the question status on answer click (either correct or incorrect)
  const handleAnswerClickWithStatus = (isCorrect, questionIndex) => {
    const updatedStatus = [...questionStatus];
    updatedStatus[questionIndex] = isCorrect ? "correct" : "incorrect";
    setQuestionStatus(updatedStatus);

    // Mark that an answer has been clicked
    setIsAnswerClicked(true);

    // Proceed with original answer click handling
    handleAnswerClick(isCorrect, questionIndex);
  };

  // Update the status if the time runs out
  const handleQuestionTimeOutWithStatus = useCallback(
    (questionIndex) => {
      if (!isAnswerClicked) {
        const updatedStatus = [...questionStatus];
        updatedStatus[questionIndex] = "incorrect"; // If time runs out, consider incorrect
        setQuestionStatus(updatedStatus);
        handleQuestionTimeOut(questionIndex);
      }
    },
    [isAnswerClicked, questionStatus, handleQuestionTimeOut],
  );

  // Function to move to the next question and reset states
  const handleNextQuestionWithReset = () => {
    setIsAnswerClicked(false); // Reset answer clicked state
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // Increment to the next question
    handleNextQuestion(); // Call the existing next question handler
  };

  return (
    <main>
      <QuestionBox
        handleOnClick={handleAnswerClickWithStatus}
        questionData={questionData}
        answerColors={answerColors}
        notification={notification}
        handleQuestionTimeOut={handleQuestionTimeOutWithStatus}
        handleNextQuestion={handleNextQuestionWithReset}
      />
      {/* Use the currentQuestionIndex as a key to remount Timer on each new question */}
      <Timer
        key={currentQuestionIndex} // Forces remount of Timer when this key changes
        duration={100000000}
        onTimerEnd={() => handleQuestionTimeOutWithStatus(currentQuestionIndex)}
      />
      <QuestionsSequence>
        {currentCategory.questions.map((question, index) => (
          <DotSequence
            key={index}
            status={questionStatus[index]}
            isCorrect={question.correctAnswer === index}
          ></DotSequence>
        ))}
      </QuestionsSequence>

      <Notification
        isOpen={!!notification}
        title={notification?.title}
        color={notification?.color}
        explanation={renderExplanation(notification?.explanation)} // Using renderExplanation function here
        handleNextQuestion={handleNextQuestionWithReset}
      />
    </main>
  );
};

export default QuestionPage;
