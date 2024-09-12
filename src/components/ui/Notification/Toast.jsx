import * as S from "./Notification.style.js";

const Toast = ({ color, children }) => (
  <S.ToastContainer style={{ backgroundColor: color }}>{children}</S.ToastContainer>
);
export default Toast;
