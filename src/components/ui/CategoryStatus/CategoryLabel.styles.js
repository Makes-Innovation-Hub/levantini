import styled from "styled-components";

export const Category = styled.div`
  position: relative;
  font-size: 10px;
  margin-top: 7px;
  border: none;
  width: 88px;

  display: flex;
  justify-content: space-evenly;
  line-height: 19px;
  font-weight: 700;
  text-transform: capitalize;
  padding: 0 2px;

  border-radius: 40px;
  align-items: center;
  gap: 8px;
  background-color: ${(props) =>
    props.status === "completed"
      ? "#58D39F"
      : props.status === "started"
        ? "#58B2D3"
        : props.status === "in_progress"
          ? "#58B2D3"
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
