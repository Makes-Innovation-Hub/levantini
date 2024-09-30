import styled from "styled-components";

export const div = styled.div`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${(props) =>
    props.status === "completed"
      ? "#58D39F"
      : props.status === "started"
        ? "#58B2D3"
        : props.status === "in-progress"
          ? "#D35858"
          : "#D35858"};
  color: white;
  transition: background-color 0.3s ease;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  svg {
    fill: white;
  }
`;

export const LockMessage = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 2px dashed #ff4081;
  color: #ff4081;
  font-family: var(--inter);
  font-size: 10px;
  font-weight: 700;
  border-radius: 10px;
  text-align: center;
  max-width: 300px;
`;
