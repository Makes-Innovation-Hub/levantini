import { toast, Toaster } from "react-hot-toast";
import Toast from "./Toast";
import QuizNotification from "./QuizNotification";
import QuizButton from "./QuizButton";

const Notification = ({ isCorrect, isTimeout, explanation, handleNextQuestion }) => {
  const title = isTimeout
    ? "Time Out"
    : isCorrect
    ? "Yes! Right Answer"
    : "OOPS! Wrong Answer";

  const color = isTimeout || !isCorrect ? "var(--red--)" : "var(--green--)";

  if (isCorrect || isTimeout) {
    toast.custom(
      (t) => (
        <Toast color={color}>
          <QuizNotification title={title} explanation={explanation} />
          <QuizButton
            handleClick={() => {
              toast.dismiss(t.id);
              handleNextQuestion();
            }}
          >
            Next Question
          </QuizButton>
        </Toast>
      ),
      {
        duration: isTimeout ? 10000 : Infinity,
        position: "bottom-center",
      },
    );
  }

  return <Toaster />;
};

export default Notification;
