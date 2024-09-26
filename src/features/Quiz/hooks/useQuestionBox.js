import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../../api/data.json";

const useQuestionBox = () => {
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState(data.data[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questionData = currentCategory.questions[currentQuestionIndex];

  const [answerColors, setAnswerColors] = useState(Array(4).fill("var(--blue)"));
  const [isAnswered, setIsAnswered] = useState(false);
  const [notification, setNotification] = useState(null);
  const [timeOut, setTimeOut] = useState(false);

  const handleAnswerClick = (index) => {
    if (isAnswered || timeOut) return;

    const updatedColors = [...answerColors];
    if (index === questionData.correctAnswer) {
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
    setIsAnswered(true);
  };
  const handleQuestionTimeOut = () => {
    console.log("invoked");

    setNotification({
      title: "Time Is Out!",
      color: "var(--red)",
      explanation: questionData.explanation,
    });
  };
  console.log({ notification });
  // Handle Time Out
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (!isAnswered) {
  //       setTimeOut(true);

  //     }
  //   }, 10000);

  //   return () => clearTimeout(timer);
  // }, [isAnswered, questionData]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentCategory.questions.length - 1) {
      // Move to the next question
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setIsAnswered(false);
      setAnswerColors(Array(4).fill("var(--blue)"));
      setNotification(null);
      setTimeOut(false);
    } else {
      //  navigate to the home page
      navigate("/");
    }
  };

  return {
    questionData,
    answerColors,
    handleAnswerClick,
    notification,
    handleQuestionTimeOut,
    handleNextQuestion,
    timeOut,
  };
};

export default useQuestionBox;
