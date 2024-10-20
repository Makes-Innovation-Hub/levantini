import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import data from "../../../api/data.json";
import { toast } from "react-hot-toast";

const QuizQuestionBoxContext = createContext();

export const QuizProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState(data.data[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questionData = currentCategory.questions[currentQuestionIndex];
  const [questionStatus, setQuestionStatus] = useState(
    Array(currentCategory.questions.length).fill(null),
  );
  const [answerColors, setAnswerColors] = useState(Array(4).fill("var(--blue)"));
  const [notification, setNotification] = useState(null);

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
  };

  const handleQuestionTimeOut = () => {
    const updatedColors = [...answerColors];
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
    const updatedStatus = [...questionStatus];
    updatedStatus[currentQuestionIndex] = isCorrect ? "correct" : "incorrect";
    setQuestionStatus(updatedStatus);
    handleAnswerClick(isCorrect, answerIndex);
  };

  useEffect(() => {
    if ((currentQuestionIndex > currentCategory.questions.length - 1) & !notification) {
      navigate("/");
    }
  }, [notification]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentCategory.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setAnswerColors(Array(4).fill("var(--blue)"));
      setNotification(null);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setNotification(null);
    }
  };

  const handleQuestionTimeOutWithStatus = useCallback(
    (questionIndex) => {
      const updatedStatus = [...questionStatus];
      updatedStatus[questionIndex] = "timeout";
      setQuestionStatus(updatedStatus);
      handleQuestionTimeOut();
    },
    [questionStatus],
  );

  return (
    <QuizQuestionBoxContext.Provider
      value={{
        questionData,
        answerColors,
        handleAnswerClickWithStatus,
        handleQuestionTimeOutWithStatus,
        notification,
        handleNextQuestion,
        questionStatus,
        currentQuestionIndex,
        currentCategory,
      }}
    >
      {children}
    </QuizQuestionBoxContext.Provider>
  );
};

export const useQuizQuestionBoxContext = () => useContext(QuizQuestionBoxContext);
