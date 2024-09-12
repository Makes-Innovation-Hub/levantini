import * as S from "./Notification.style.js";

const QuizButton = ({ handleClick, children }) => (
  <S.ToastButton onClick={handleClick}>{children}</S.ToastButton>
);
export default QuizButton;
