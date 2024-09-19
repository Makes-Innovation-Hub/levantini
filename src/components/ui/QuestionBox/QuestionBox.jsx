// import React from "react";
// import Button from "../Button/Button";
// import * as S from "./QuestionBox.style.js";
// import TextQuestion from "../../../features/authentication/components/TextQuestionType/TextQuestionType.jsx";
// import useQuestionBox from "../../../features/authentication/hooks/useQuestionBox.js";

// const QuestionBox = () => {
//   const { questionData, answerColors, handleAnswerClick } = useQuestionBox();

//   if (!questionData) return <p>No question data available</p>;

//   return (
//     <>
//       {(() => {
//         switch (questionData.questionType) {
//           case "text":
//             return (
//               <TextQuestion question={questionData.question} text={questionData.text} />
//             );
//           case "image":
//             return (
//               <div>
//                 <img src={questionData.image} alt="question" />
//               </div>
//             );
//           case "video":
//             return (
//               <div>
//                 <video width="320" height="240" controls>
//                   <source src={questionData.video} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//             );
//           default:
//             return <p>Unsupported question type</p>;
//         }
//       })()}

//       <S.QuestionBox>
//         {questionData.answers.map((answer, index) => (
//           <Button
//             key={index}
//             handleClick={() => handleAnswerClick(index)}
//             color={answerColors[index]}
//           >
//             <span>{answer}</span>
//           </Button>
//         ))}
//       </S.QuestionBox>
//     </>
//   );
// };

// export default QuestionBox;

// src/components/ui/QuestionBox.jsx

// src/components/ui/QuestionBox.jsx
import React from "react";
import Button from "../Button/Button";
import * as S from "./QuestionBox.style.js";
import TextQuestion from "../../../features/Quiz/components/TextQuestionType/TextQuestionType.jsx";
import useQuestionBox from "../../../features/Quiz/hooks/useQuestionBox.js";

const QuestionBox = () => {
  const { questionData, answerColors, handleAnswerClick, notification } =
    useQuestionBox();

  if (!questionData) return <p>No question data available</p>;

  return (
    <>
      {(() => {
        switch (questionData.questionType) {
          case "text":
            return (
              <TextQuestion question={questionData.question} text={questionData.text} />
            );
          case "image":
            return (
              <div>
                <S.Image src={questionData.image} alt="question" />
              </div>
            );
          case "video":
            return (
              <div>
                <video width="320" height="240" controls>
                  <source src={questionData.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            );
          default:
            return <p>Unsupported question type</p>;
        }
      })()}

      <S.QuestionBox>
        {questionData.answers.map((answer, index) => (
          <Button
            key={index}
            handleClick={() => handleAnswerClick(index)}
            color={answerColors[index]}
            disabled={notification} // Disable buttons if a notification is shown
          >
            <span>{answer}</span>
          </Button>
        ))}
      </S.QuestionBox>
    </>
  );
};

export default QuestionBox;
