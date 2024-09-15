import { Toaster } from "react-hot-toast";
import Toast from "./Toast";

const Notification = ({ title, color, explanation, handleNextQuestion }) => {
  return (
    <>
      <Toaster />
      <Toast
        color={color}
        title={title}
        explanation={explanation}
        handleNextQuestion={handleNextQuestion}
        triggerToast={true}
      />
    </>
  );
};

export default Notification;
