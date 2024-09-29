import React from "react";
import QuestionBox from "../components/ui/QuestionBox";
import Notification from "../components/ui/Notification/Notification";
import useQuestionBox from "../features/Quiz/hooks/useQuestionBox";
import QuizButton from "../components/ui/Notification/QuizButton";
import Timer from "../components/ui/Timer/Timer";
import Dot from "../components/ui/DoteSequence/DoteSequence";

const QuestionPage = () => {
  const {
    notification,
    handleQuestionTimeOut,
    handleAnswerClick,
    questionData,
    answerColors,
    handleNextQuestion,
  } = useQuestionBox();
  console.log("we are here", { notification });
  // console.log({ answerColors });
  // console.log({ questionData });
  console.log({ handleQuestionTimeOut });
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
      <Timer duration={1} onTimerEnd={handleQuestionTimeOut} />
      <Dot />

      {notification && (
        <Notification
          title={notification.title}
          color={notification.color}
          explanation={notification.explanation}
          handleNextQuestion={handleNextQuestion}
        >
          {" "}
        </Notification>
      )}
    </main>
  );
};

export default QuestionPage;
