// import styled from "styled-components";

// export const ToastContainer = styled.div`
//   width: 100vw;
//   height: 270px;

//   color: var(--white);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   /* opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
//   transition: opacity 0.5s ease-in-out;
//   pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")}; */
// `;

// export const ToastCorrect = styled.div`
//   background-color: var(--green);
//   width: 100%;
//   height: 50%;
// `;

// export const ToastIncorrect = styled.div`
//   background-color: var(--red);
// `;

// export const ToastTitle = styled.h2`
//   font-size: 18px;
//   font-weight: bold;
//   margin-bottom: 10px;
//   color: var(--grey-black);
// `;

// export const ToastText = styled.p`
//   margin-bottom: 15px;
//   color: var(--grey-black);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export const ToastButton = styled.button`
//   background-color: var(--white);
//   color: var(--grey-black);
//   font-weight: 700;
//   size: 20px;
//   text-align: center;
//   border: none;
//   cursor: pointer;
//   border-radius: 10px;
//   width: 338px;
//   height: 57px;
//   font-size: 20px;
//   line-height: 22px;
// `;
import styled from "styled-components";

export const ToastContainer = styled.div`
  width: 100vw;
  height: 312px;

  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")}; */
  /*overflow-y: auto;  Enable vertical scrolling */
  /*overflow-x: hidden;  Prevent horizontal scrolling */
`;

export const ToastCorrect = styled.div`
  background-color: var(--green);
  width: 100%;
  height: 50%;
`;

export const ToastIncorrect = styled.div`
  background-color: var(--red);
`;

export const ToastTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--grey-black);
  text-align: center; /* Center the text */
`;

export const ToastText = styled.p`
  margin-bottom: 15px;
  color: var(--grey-black);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; /* Center the text */
`;

export const ToastButton = styled.button`
  background-color: var(--white);
  color: var(--grey-black);
  font-weight: 700;
  size: 20px;
  text-align: center; /* Center the button text */
  border: none;
  cursor: pointer;
  border-radius: 10px;
  width: 338px;
  height: 57px;
  font-size: 20px;
  line-height: 22px;
`;
