import React from "react";
import QuestionBox from "../components/ui/QuestionBox";
import Notification from "../components/ui/Notification/Notification";
import useQuestionBox from "../features/Quiz/hooks/useQuestionBox";
import QuizButton from "../components/ui/Notification/QuizButton";
import Timer from "../components/ui/Timer/Timer";

const QuestionPage = () => {
  const {
    notification,
    handleQuestionTimeOut,
    handleAnswerClick,
    questionData,
    answerColors,
    handleNextQuestion,
  } = useQuestionBox();
  console.log({ notification });
  console.log({ answerColors });
  console.log({ questionData });
  return (
    <main>
      <QuestionBox
        handleOnClick={handleAnswerClick}
        questionData={questionData}
        answerColors={answerColors}
        notification={notification}
        handleQuestionTimeOut={handleQuestionTimeOut}
        handleNextQuestion={handleNextQuestion}
      />
      <Timer duration={10} onTimerEnd={handleQuestionTimeOut} />

      {notification && (
        <Notification
          title={notification.title}
          color={notification.color}
          explanation={notification.explanation}
          // handleNextQuestion={handleNextQuestion}
        >
          {" "}
        </Notification>
      )}
    </main>
  );
};

export default QuestionPage;
