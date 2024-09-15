import { toast } from "react-hot-toast";
import QuizNotification from "./QuizNotification";
import QuizButton from "./QuizButton";
import * as S from "./Notification.style.js";

const Toast = ({ color, title, explanation, handleNextQuestion, triggerToast }) => {
  if (triggerToast) {
    toast(
      <S.ToastContainer style={{ backgroundColor: color }}>
        <QuizNotification title={title} explanation={explanation} />
        <QuizButton
          handleClick={() => {
            toast.dismiss();
            handleNextQuestion();
          }}
        >
          Next Question
        </QuizButton>
      </S.ToastContainer>,
      {
        duration: Infinity,
        position: "bottom-center",
      },
    );
  }

  return null;
};

export default Toast;
