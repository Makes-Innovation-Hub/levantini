import styled from "styled-components/macro";

export const ToastContainer = styled.div`
  width: 0vw;
  padding: 20px;
  color: var(--white--);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;
  transition: opacity 0.5s;
`;

export const ToastCorrect = styled.div`
  background-color: var(--green--);
`;

export const ToastIncorrect = styled.div`
  background-color: var(--red--);
`;

export const ToastTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--grey-black--);
`;

export const ToastText = styled.p`
  margin-bottom: 15px;
  color: var(--grey-black--);
`;

export const ToastButton = styled.button`
  background-color: var(--white--);
  color: var(--grey-black--);
  border: none;
  cursor: pointer;
  border-radius: 10px;
  width: 80vw;
  height: 46px;
  font-size: 20px;
  line-height: 22px;
`;
