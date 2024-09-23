// import QuestionBox from "../components/ui/QuestionBox";

// const QuestionPage = () => {
//   return (
//     <main>
//       <QuestionBox />
//     </main>
//   );
// };

// export default QuestionPage;

// src/pages/QuestionPage.jsx

// src/pages/QuestionPage.jsx
import React from "react";
import QuestionBox from "../components/ui/QuestionBox";
import Notification from "../components/ui/Notification/Notification";
import useQuestionBox from "../features/Quiz/hooks/useQuestionBox";

const QuestionPage = () => {
  const { notification } = useQuestionBox();
  console.log({ notification });
  return (
    <main>
      <QuestionBox />
      {notification && (
        <Notification
          title={notification.title}
          color={notification.color}
          explanation={notification.explanation}
          // handleNextQuestion={handleNextQuestion}
        />
      )}
    </main>
  );
};

export default QuestionPage;
