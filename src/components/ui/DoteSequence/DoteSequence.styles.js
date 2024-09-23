import styled from "styled-components";

export const DotSequence = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};
  border: 2px solid ${({ borderColor }) => borderColor || "lightgray"};
  opacity: ${({ transparent }) => (transparent ? 0.4 : 1)};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;
