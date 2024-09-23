import { toast } from "react-hot-toast";

const Toast = ({ open, children, duration, position, width, toastId = "quiz" }) => {
  if (open) {
    toast.custom(
      (t) => (
        <div
          className={`toast `}
          style={{
            width: width,
          }}
        >
          {children}
        </div>
      ),
      {
        duration: duration,
        position: position,
        id: toastId,
      },
    );
  } else {
    toast.dismiss();
  }

  return null;
};

export default Toast;
