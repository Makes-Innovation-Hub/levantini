import Toast from "./Toast";

import QuizNotification from "./QuizNotification";

const Notification = ({ isOpen, title, color, explanation, handleNextQuestion }) => {
  return (
    <Toast open={isOpen} position="bottom-center" duration={Infinity}>
      <QuizNotification
        color={color}
        title={title}
        explanation={explanation}
        handleNextQuestion={() => {
          handleNextQuestion();
        }}
      />
    </Toast>
  );
};

export default Notification;
