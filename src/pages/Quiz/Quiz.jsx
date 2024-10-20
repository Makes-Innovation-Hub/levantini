// import React, { useState, useCallback } from "react";
// import * as S from "../Quiz/Quiz.styled.js";
// import QuestionBox from "../../features/Quiz/components/QuestionBox/index.js";
// import Notification from "../../components/ui/Notification/Notification.jsx";
// import useQuestionBox from "../../features/Quiz/hooks/useQuestionBox.js";
// import Timer from "../../features/Quiz/components/Timer/Timer.jsx";
// import Button from "../../components/ui/Button/Button.jsx";

// import QuestionsSequence from "../../features/Quiz/components/QuestionsSequence/QuestionsSequence.jsx";
// import { DotSequence } from "../../features/Quiz/components/DoteSequence/DoteSequence.styles.js";

// const Quiz = () => {
//   const {
//     notification,
//     questionData,
//     answerColors,
//     handleNextQuestion,
//     currentCategory,
//     currentQuestionIndex,
//     handleAnswerClickWithStatus,
//     handleQuestionTimeOutWithStatus,
//     questionStatus,
//   } = useQuestionBox();

//   const renderExplanation = (explanation) => {
//     if (!explanation || !Array.isArray(explanation)) return null;

//     return explanation.map((sentence, index) => {
//       const splitSentences = sentence.split(",").map((part, i) => (
//         <span key={`${index}-${i}`}>
//           {part.trim()}
//           {i !== sentence.split(",").length - 1 && <br />}
//         </span>
//       ));
//       return <div key={index}>{splitSentences}</div>;
//     });
//   };

//   return (
//     <S.main>
//       <QuestionBox questionData={questionData}>
//         {questionData?.answers?.map((answer, index) => {
//           console.log({ index });
//           return (
//             <Button
//               key={index}
//               isDisabled={questionStatus[currentQuestionIndex]}
//               handleClick={() => handleAnswerClickWithStatus(index)}
//               color={answerColors[index]}
//             >
//               {answer}
//             </Button>
//           );
//         })}
//       </QuestionBox>

//       {!questionStatus[currentQuestionIndex] && (
//         <Timer
//           key={currentQuestionIndex}
//           duration={10}
//           onTimerEnd={() => handleQuestionTimeOutWithStatus(currentQuestionIndex)}
//         />
//       )}
//       {!notification && (
//         <QuestionsSequence>
//           {currentCategory.questions.map((_, index) => (
//             <DotSequence
//               key={index}
//               status={index === currentQuestionIndex ? "current" : questionStatus[index]}
//             />
//           ))}
//         </QuestionsSequence>
//       )}

//       <Notification
//         isOpen={!!notification}
//         title={notification?.title}
//         color={notification?.color}
//         explanation={renderExplanation(notification?.explanation)}
//         handleNextQuestion={handleNextQuestion}
//       />
//     </S.main>
//   );
// };

// export default Quiz;

import React from "react";
import * as S from "../Quiz/Quiz.styled.js";
import QuestionBox from "../../features/Quiz/components/QuestionBox/index.js";
import Notification from "../../components/ui/Notification/Notification.jsx";
import Timer from "../../features/Quiz/components/Timer/Timer.jsx";
import Button from "../../components/ui/Button/Button.jsx";
import QuestionsSequence from "../../features/Quiz/components/QuestionsSequence/QuestionsSequence.jsx";
import { DotSequence } from "../../features/Quiz/components/DoteSequence/DoteSequence.styles.js";
import { useQuizQuestionBoxContext } from "../../features/Quiz/context/QuizQuestionBoxContext.jsx";

const Quiz = () => {
  const {
    questionData,
    answerColors,
    handleAnswerClickWithStatus,
    handleQuestionTimeOutWithStatus,
    notification,
    handleNextQuestion,
    questionStatus,
    currentQuestionIndex,
    currentCategory,
  } = useQuizQuestionBoxContext();

  const renderExplanation = (explanation) => {
    if (!explanation || !Array.isArray(explanation)) return null;

    return explanation.map((sentence, index) => {
      const splitSentences = sentence.split(",").map((part, i) => (
        <span key={`${index}-${i}`}>
          {part.trim()}
          {i !== sentence.split(",").length - 1 && <br />}
        </span>
      ));
      return <div key={index}>{splitSentences}</div>;
    });
  };

  return (
    <S.main>
      <QuestionBox>
        {questionData?.answers?.map((answer, index) => (
          <Button
            key={index}
            isDisabled={questionStatus[currentQuestionIndex]}
            handleClick={() => handleAnswerClickWithStatus(index)}
            color={answerColors[index]}
          >
            {answer}
          </Button>
        ))}
      </QuestionBox>

      {!questionStatus[currentQuestionIndex] && (
        <Timer
          key={currentQuestionIndex}
          duration={10}
          onTimerEnd={() => handleQuestionTimeOutWithStatus(currentQuestionIndex)}
        />
      )}
      {!notification && (
        <QuestionsSequence>
          {currentCategory.questions.map((_, index) => (
            <DotSequence
              key={index}
              status={index === currentQuestionIndex ? "current" : questionStatus[index]}
            />
          ))}
        </QuestionsSequence>
      )}

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
