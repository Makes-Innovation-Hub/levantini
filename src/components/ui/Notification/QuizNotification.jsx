import * as S from "./Notification.style.js";

const QuizNotification = ({ title, explanation }) => (
  <>
    <S.ToastTitle>{title}</S.ToastTitle>
    <S.ToastText>{explanation}</S.ToastText>
  </>
);
export default QuizNotification;
