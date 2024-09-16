import { toast } from "react-hot-toast";

const Toast = ({ open, children, duration, position, width }) => {
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
      },
    );
  } else {
    toast.dismiss();
  }

  return null;
};

export default Toast;
