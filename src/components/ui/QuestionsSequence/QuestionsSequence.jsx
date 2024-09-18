import React from "react";
import styled from "styled-components";

const DotContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({ state }) => getDotBorderColor(state)};
  background-color: ${({ state }) => getDotBackgroundColor(state)};
  opacity: ${({ state }) => (state.includes("transparent") ? 0.4 : 1)};
  font-weight: ${({ state }) => (state.includes("bold") ? "bold" : "normal")};
`;

const getDotBackgroundColor = (state) => {
  if (state.includes("green")) return "green";
  if (state.includes("red")) return "red";
  return "transparent";
};

const getDotBorderColor = (state) => {
  if (state.includes("green")) return "green";
  if (state.includes("red")) return "red";
  return "lightgray";
};

const QuestionsSequence = ({ states }) => {
  return (
    <DotContainer>
      {states.map((state, index) => (
        <Dot key={index} state={state} />
      ))}
    </DotContainer>
  );
};

export default QuestionsSequence;
