import { toast } from "react-hot-toast";
import QuizNotification from "./QuizNotification";

const Toast = ({ color, title, explanation, handleNextQuestion, triggerToast }) => {
  if (triggerToast) {
    toast(
      <QuizNotification
        title={title}
        explanation={explanation}
        handleNextQuestion={handleNextQuestion}
        color={color} 
      />,
      {
        duration: Infinity,
        position: "bottom-center",
      },
    );
  }

  return null;
};

export default Toast;
