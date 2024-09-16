import Toast from "./Toast";
import { useState } from "react";
import QuizNotification from "./QuizNotification";

const Notification = ({ title, color, explanation, handleNextQuestion }) => {
  const [isToastOpen, setIsToastOpen] = useState(true);

  return (
    <Toast open={isToastOpen} position="bottom-center" duration={Infinity}>
      <QuizNotification
        color={color}
        title={title}
        explanation={explanation}
        handleNextQuestion={() => {
          handleNextQuestion();
          setIsToastOpen(false);
        }}
      />
    </Toast>
  );
};

export default Notification;
