//////21.10.2024

import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../../../api/hooks/useFetchData";
import { useMutateUserProgress } from "../../../api/hooks/useMutateUserProgress.jsx";
import { useAuth } from "../../../features/authentication/context/AuthContext.jsx";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const { data, isLoading } = useFetchData();
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const id = Number(categoryId);
  const { currentUser, signInWithGoogle, logout } = useAuth();

  ///

  const { mutate: mutateUserProgress } = useMutateUserProgress();
  ///
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questionData = currentCategory?.questions[currentQuestionIndex];
  const [questionStatus, setQuestionStatus] = useState(
    Array(currentCategory?.questions.length).fill(null),
  );

  const [answerColors, setAnswerColors] = useState(Array(4).fill("var(--blue)"));
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (!data) return;

    const category = data.filter((el) => el.id === id);

    setCurrentCategory(category[0]);
  }, [id, data]);
  useEffect(() => {
    if (!currentUser) return;
    console.log({ currentUser });
    // mutate({ user, categoryId, status: "in_progress" });
    const progress = currentUser.progress.find((prog) => {
      return prog.id === id;
    });
    console.log({ progress });

    //need to find out if a user already has this progress object in its record. If exsists then dont do a mutation.
    // !progress means there is no progress object of this ctegory id in the firebase
    if (!progress) {
      mutateUserProgress({ currentUser, id, status: "in_progress" });
    }
  }, [currentUser]);

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

  //
  useEffect(() => {
    if (currentQuestionIndex > currentCategory?.questions.length - 1 && !notification) {
      console.log("im in the use effect");
      const progress = currentUser.progress.find((prog) => {
        console.log({ prog }, id);
        return prog.id === id;
      });
      console.log({ progress });
      if (progress && progress.status !== "completed") {
        //a user can come back to this category again and click the questions so it can be done already

        mutateUserProgress({ currentUser, id, status: "completed" });
      }
      navigate("/");
    } else {
      notification && currentQuestionIndex < currentCategory?.questions.length - 1;
    }
  }, [notification]);
  //
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

  const handleQuestionTimeOutWithStatus = (questionIndex) => {
    const updatedStatus = [...questionStatus];
    updatedStatus[questionIndex] = "timeout";
    setQuestionStatus(updatedStatus);
    handleQuestionTimeOut();
  };

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
        isLoading,
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
