import { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import "./Notification.css";

const Notification = ({ isCorrect, isTimeout, explanation, handleNextQuestion }) => {
  const toastColor = isTimeout
    ? "toast-incorrect"
    : isCorrect
    ? "toast-correct"
    : "toast-incorrect";

  const title = isTimeout
    ? "Time Out"
    : isCorrect
    ? "Yes! Right Answer"
    : "OOPS! Wrong Answer";

  useEffect(() => {
    const toastId = toast.custom(
      (t) => (
        <div
          className={`toast-container ${toastColor} ${
            t.visible ? "animate-slideIn" : "animate-slideOut"
          }`}
        >
          <h2 className="toast-title">{title}</h2>
          <p className="toast-text">{explanation}</p>
          <button
            className="toast-button"
            onClick={() => {
              toast.dismiss(toastId);
              handleNextQuestion();
            }}
          >
            Next Question
          </button>
        </div>
      ),
      {
        duration: isTimeout ? 10000 : Infinity,
        position: "bottom-center",
      },
    );

    return () => {
      toast.dismiss(toastId);
    };
  }, [isCorrect, isTimeout, explanation, handleNextQuestion, toastColor, title]);

  return <Toaster />;
};

export default Notification;
