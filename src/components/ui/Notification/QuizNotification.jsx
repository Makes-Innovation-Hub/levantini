import * as S from "./Notification.style.js";
import QuizButton from "./QuizButton.jsx";

const QuizNotification = ({ title, explanation, handleNextQuestion, color }) => (
  <S.ToastContainer style={{ backgroundColor: color }}>
    <S.ToastTitle>{title}</S.ToastTitle>
    <S.ToastText>{explanation}</S.ToastText>
    <QuizButton
      handleClick={() => {
        toast.dismiss();
        handleNextQuestion();
      }}
    >
      Next Question
    </QuizButton>
  </S.ToastContainer>
);

export default QuizNotification;
