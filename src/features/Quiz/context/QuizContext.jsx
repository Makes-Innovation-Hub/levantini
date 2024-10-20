import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../../api/data.json";
import { toast } from "react-hot-toast";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questionData = currentCategory?.questions[currentQuestionIndex];
  const [questionStatus, setQuestionStatus] = useState(
    Array(currentCategory?.questions.length).fill(null),
  );
  const [answerColors, setAnswerColors] = useState(Array(4).fill("var(--blue)"));
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const category = data.data.filter((el) => {
      return el.id === Number(categoryId);
    });
    setCurrentCategory(category[0]);
  }, [categoryId]);

  const handleAnswerClick = (isCorrect, index) => {
    const updatedColors = [...answerColors];
    if (isCorrect) {
      updatedColors[index] = "var(--green)";
      setNotification({
        title: "YES! Right Answer",
        color: "var(--green)",
        explanation: questionData?.explanation,
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
    if ((currentQuestionIndex > currentCategory?.questions.length - 1) & !notification) {
      navigate("/");
    }
  }, [notification]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentCategory?.questions.length - 1) {
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
    <QuizContext.Provider
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
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error("useQuizContext must be used within an QuizProvider");
  }
  return context;
};
