import { toast } from "react-hot-toast";
import { useEffect } from "react";

const Toast = ({ open, children, duration, position, width, toastId = "quiz" }) => {
  useEffect(() => {
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
      toast.dismiss(toastId);
    }
  }, [open, children, duration, position, width, toastId]);

  return null;
};

export default Toast;
