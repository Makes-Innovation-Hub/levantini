// import styled from "styled-components";

// export const DotSequence = styled.div`
//   width: 10px;
//   height: 10px;
//   border-radius: 50%;
//   background-color: ${({ status }) => {
//     if (status === "correct") return "var(--green)";
//     if (status === "incorrect") return "var(--red)";
//     return "transparent";
//   }};
//   border: 1px solid ${({ borderColor }) => borderColor || "var(--green)"};
//   opacity: ${({ transparent }) => (transparent ? 0.4 : 1)};
//   font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
//   margin-top: 28px;
//   margin: 0;
//   display: inline-block;
// `;

import styled from "styled-components";

export const DotSequence = styled.div.attrs((props) => ({
  status: props.status, // This prevents `status` from being forwarded to the DOM
}))`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;

  background-color: ${({ status }) => {
    if (status === "correct") return "var(--green)"; // Correct answer
    if (status === "incorrect" || status === "timeout") return "var(--red)"; // Incorrect/timeout
    return "transparent"; //  null or future question
  }};

  border: 3px solid var(--green); // All dots have green border regardless of status
  font-weight: ${({ status }) =>
    status === "current" ? "bold" : "normal"}; // Bold border for current question
  opacity: ${({ status }) =>
    status === null ? 0.4 : 1}; // null are slightly transparent
`;
