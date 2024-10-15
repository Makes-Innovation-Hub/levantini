import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../../api/data.json";
import { toast } from "react-hot-toast";

const useQuestionBox = () => {
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState(data.data[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questionData = currentCategory.questions[currentQuestionIndex];
  const [questionStatus, setQuestionStatus] = useState(
    Array(currentCategory.questions.length).fill(null),
  );

  const [answerColors, setAnswerColors] = useState(Array(4).fill("var(--blue)"));
  const [notification, setNotification] = useState(null);
  console.log(answerColors);

  const handleAnswerClick = (isCorrect, index) => {
    const updatedColors = [...answerColors];
    if (isCorrect) {
      updatedColors[index] = "var(--green)";
      setNotification({
        title: "YES! Right Answer",
        color: "var(--green)",
        explanation: questionData.explanation,
      });
    } else {
      updatedColors[index] = "var(--red)";
      updatedColors[questionData.correctAnswer] = "var(--green)";
      setNotification({
        title: "OOPS! Wrong Answer",
        color: "var(--red)",
        explanation: questionData.explanation,
      });
    }

    setAnswerColors(updatedColors);
    // console.log("set is answered ", setIsAnswered);
  };
  const handleQuestionTimeOut = () => {
    //we need to REFACTOR IT ONE SOURCE OF TRUTH becuase it has a duppilcation
    const updatedColors = [...answerColors];
    // console.log("invoked");
    updatedColors[questionData.correctAnswer] = "var(--green)";
    setAnswerColors(updatedColors);
    setNotification({
      title: "Time Is Out!",
      color: "var(--red)",
      explanation: questionData.explanation,
    });
  };
  const handleAnswerClickWithStatus = (answerIndex) => {
    const isCorrect = answerIndex === questionData.correctAnswer;
    // console.log({ isCorrect });

    const updatedStatus = [...questionStatus];
    // console.log("before", updatedStatus);

    updatedStatus[currentQuestionIndex] = isCorrect ? "correct" : "incorrect";
    console.log("after", updatedStatus);
    setQuestionStatus(updatedStatus);

    // console.log("Updated status after click:", updatedStatus);

    // Mark that an answer has been clicked
    // setIsAnswerClicked(true);

    // Proceed with original answer click handling
    handleAnswerClick(isCorrect, answerIndex);
  };

  // console.log({ notification });
  // Handle Time Out
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (!isAnswered) {
  //       setTimeOut(true);

  //     }
  //   }, 10000);

  //   return () => clearTimeout(timer);
  // }, [isAnswered, questionData]);

  useEffect(() => {
    if ((currentQuestionIndex > currentCategory.questions.length - 1) & !notification) {
      navigate("/");
    }
  }, [notification]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentCategory.questions.length - 1) {
      // Move to the next question
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

      setAnswerColors(Array(4).fill("var(--blue)"));

      setNotification(null);
    } else {
      //  navigate to the home page
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setNotification(null);
      // navigate("/");
    }
  };
  const handleQuestionTimeOutWithStatus = useCallback(
    (questionIndex) => {
      console.log("IM INVOKED");

      const updatedStatus = [...questionStatus];
      updatedStatus[questionIndex] = "timeout"; // Mark the status as timeout
      setQuestionStatus(updatedStatus);

      console.log("Updated status after timeout:", updatedStatus);

      handleQuestionTimeOut(questionIndex); // Proceed with original logic
    },
    [questionStatus, handleQuestionTimeOut],
  );
  // console.log("line 75", { notification });

  return {
    questionData,
    answerColors,
    handleAnswerClick,
    notification,
    handleQuestionTimeOut,
    handleNextQuestion,
    currentCategory,
    currentQuestionIndex,
    handleAnswerClickWithStatus,
    handleQuestionTimeOutWithStatus,
    questionStatus,
  };
};

export default useQuestionBox;
