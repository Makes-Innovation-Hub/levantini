import styled from "styled-components";

export const ToastContainer = styled.div`
  width: 390px;
  height: 261px;
  padding: 20px;
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;
  transition: opacity 0.5s;
`;

export const ToastCorrect = styled.div`
  background-color: var(--green);
`;

export const ToastIncorrect = styled.div`
  background-color: var(--red);
`;

export const ToastTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--grey-black);
`;

export const ToastText = styled.p`
  margin-bottom: 15px;
  color: var(--grey-black);
`;

export const ToastButton = styled.button`
  background-color: var(--white);
  color: var(--grey-black);
  font-weight: 700;
  size: 20px;
  text-align: center;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  width: 338px;
  height: 57px;
  font-size: 20px;
  line-height: 22px;
`;
