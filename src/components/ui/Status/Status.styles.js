import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) =>
    props.status === "completed"
      ? "#58D39F"
      : props.status === "started"
        ? "#58B2D3"
        : "#D35858"};
  color: white;
  transition: background-color 0.3s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const LockMessage = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 2px dashed #d35883;
  color: #d35883;
  font-size: 10px;
  font-weight: 800px;
  border-radius: 10px;
  text-align: center;
  width: 198.8px;
  height: 115px;
`;
