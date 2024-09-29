// import React from "react";
// import QuestionBox from "../components/ui/QuestionBox";
// import Notification from "../components/ui/Notification/Notification";
// import useQuestionBox from "../features/Quiz/hooks/useQuestionBox";
// import QuizButton from "../components/ui/Notification/QuizButton";
// import Timer from "../components/ui/Timer/Timer";
// import Dot from "../components/ui/DoteSequence/DoteSequence";

// const QuestionPage = () => {
//   const {
//     notification,
//     handleQuestionTimeOut,
//     handleAnswerClick,
//     questionData,
//     answerColors,
//     handleNextQuestion,
//   } = useQuestionBox();
//   console.log("we are here", { notification });
//   // console.log({ answerColors });
//   // console.log({ questionData });
//   // console.log({ handleQuestionTimeOut });
//   return (
//     <main>
//       <QuestionBox
//         handleOnClick={handleAnswerClick}
//         questionData={questionData}
//         answerColors={answerColors}
//         notification={notification}
//         handleQuestionTimeOut={handleQuestionTimeOut}
//         handleNextQuestion={handleNextQuestion}
//       />
//       <Timer duration={10} onTimerEnd={handleQuestionTimeOut} />
//       <Dot />

//       <Notification
//         isOpen={!!notification}
//         title={notification?.title}
//         color={notification?.color}
//         explanation={notification?.explanation}
//         handleNextQuestion={handleNextQuestion}
//       >
//         {" "}
//       </Notification>
//     </main>
//   );
// };

// export default QuestionPage;

import React, { useState, useEffect } from "react";
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

  // State to track the status of each question (correct, incorrect, unanswered)
  const [questionStatus, setQuestionStatus] = useState(
    Array(questionData.length).fill("unanswered"),
  );

  // Update the question status on answer click (either correct or incorrect)
  const handleAnswerClickWithStatus = (isCorrect, questionIndex) => {
    const updatedStatus = [...questionStatus];
    updatedStatus[questionIndex] = isCorrect ? "correct" : "incorrect";
    setQuestionStatus(updatedStatus);

    // Proceed with original answer click handling
    handleAnswerClick(isCorrect, questionIndex);
  };

  // Update the status if the time runs out
  const handleQuestionTimeOutWithStatus = (questionIndex) => {
    const updatedStatus = [...questionStatus];
    updatedStatus[questionIndex] = "incorrect"; // If time runs out, consider incorrect
    setQuestionStatus(updatedStatus);

    // Proceed with original timeout handling
    handleQuestionTimeOut(questionIndex);
  };

  return (
    <main>
      <QuestionBox
        handleOnClick={handleAnswerClickWithStatus}
        questionData={questionData}
        answerColors={answerColors}
        notification={notification}
        handleQuestionTimeOut={handleQuestionTimeOutWithStatus}
        handleNextQuestion={handleNextQuestion}
      />
      <Timer duration={10} onTimerEnd={handleQuestionTimeOutWithStatus} />

      {/* Pass the questionStatus state to Dot component */}
      <Dot questionStatus={questionStatus} />

      <Notification
        isOpen={!!notification}
        title={notification?.title}
        color={notification?.color}
        explanation={notification?.explanation}
        handleNextQuestion={handleNextQuestion}
      />
    </main>
  );
};

export default QuestionPage;
