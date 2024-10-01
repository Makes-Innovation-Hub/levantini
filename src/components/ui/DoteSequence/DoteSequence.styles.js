import styled from "styled-components";

export const DotSequence = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    if (status === "correct") return "var(--green)";
    if (status === "incorrect") return "var(--red)";
    return "transparent";
  }};
  border: 1px solid ${({ borderColor }) => borderColor || "var(--green)"};
  opacity: ${({ transparent }) => (transparent ? 0.4 : 1)};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  margin-top: 28px;
  margin: 0;
  display: inline-block;
`;
