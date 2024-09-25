import styled from "styled-components";

export const DotSequence = styled.div`

  width: 10px;
  height: 10px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};
  border: 2px solid ${({ borderColor }) => borderColor || "var(--green)"};

  opacity: ${({ transparent }) => (transparent ? 0.4 : 1)};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;
