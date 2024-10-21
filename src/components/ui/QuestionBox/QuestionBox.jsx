// import React from "react";
// import Button from "../../../../components/ui/Button/Button.jsx";
// import YouTubePlayer from "../../../../lib/YouTubePlayer/YouTubePlayer.jsx";
// import * as S from "./QuestionBox.style.js";

// const QuestionBox = ({
//   handleOnClick,
//   questionData,
//   answerColors,
//   notification,
//   handleNextQuestion,
//   handleQuestionTimeOut,
//   children,
// }) => {
//   if (!questionData) return <p>No question data available</p>;

//   const renderExplanation = (explanation) => {
//     return explanation.map((sentence, index) => (
//       <span key={index}>
//         {sentence}
//         <br />
//       </span>
//     ));
//   };

//   const renderQuestionType = () => {
//     switch (questionData.questionType) {
//       case "video":
//         return (
//           <div>
//             <YouTubePlayer url={questionData.video} width="330" height="255" />;
//           </div>
//         );

//       case "image":
//         return (
//           <div>
//             <img src={questionData.image} alt={questionData.explanation} />
//           </div>
//         );

//       case "text":
//         return (
//           <div>
//             <p>{questionData.text}</p>{" "}
//           </div>
//         );

//       default:
//         null;
//     }
//   };

//   return (
//     <S.QuestionBoxFirst>
//       <S.QuestionBoxSecond>
//         <h2>{questionData.question}</h2>
//         {renderQuestionType()}

//         <div className="answers">{children}</div>
//       </S.QuestionBoxSecond>
//     </S.QuestionBoxFirst>
//   );
// };
// export default QuestionBox;
