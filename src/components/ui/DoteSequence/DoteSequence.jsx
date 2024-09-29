// import React from "react";
// import * as S from "./DoteSequence.styles"; // Importing the styles from the new file

// const Dot = ({ backgroundColor, borderColor, bold, transparent }) => {
//   return (
//     <S.DotSequence
//       backgroundColor={backgroundColor}
//       borderColor={borderColor}
//       bold={bold}
//       transparent={transparent}
//     />
//   );
// };

// export default Dot;

//////
/////
/////
// import React from "react";
// import * as S from "./DoteSequence.styles"; // Importing the styles from the new file

// // Create a dot component that will accept an `isActive` prop to highlight the active dot
// const Dot = ({ isActive }) => {
//   return (
//     <S.DotSequence
//       backgroundColor={isActive ? "var(--green)" : "var(--white)"}
//       borderColor={isActive ? "var(--green)" : "var(--green)"} // Active dots will have a border
//       bold={isActive} // If bold is needed for the active dots
//       transparent={!isActive} // Non-active dots are more transparent
//     />
//   );
// };

// export default Dot;
////
///
///
import React from "react";
import * as S from "./DoteSequence.styles"; // Importing the styles from the new file

const Dot = ({ status }) => {
  let backgroundColor;
  let borderColor;

  switch (status) {
    case "correct":
      backgroundColor = "green"; // Correct answer
      borderColor = "green";
      break;
    case "incorrect":
      backgroundColor = "red"; // Incorrect answer
      borderColor = "red";
      break;
    default:
      backgroundColor = "grey"; // Unanswered
      borderColor = "grey";
      break;
  }

  return (
    <S.DotSequence
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      bold={status !== "unanswered"} // Bold for answered questions
      transparent={status === "unanswered"} // Transparent for unanswered
    />
  );
};

export default Dot;
