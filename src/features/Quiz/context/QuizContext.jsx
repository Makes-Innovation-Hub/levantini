import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../../../api/hooks/useFetchData";
import { useMutateUserProgress } from "../../../api/hooks/useMutateUserProgress.jsx";
import { useAuth } from "../../../features/authentication/context/AuthContext.jsx";
import { useMutatePoints } from "../../../api/hooks/useMutationPoints";
import { updateUserPoints } from "../../../lib/Firebase/userService";
import { auth } from "../../../lib/Firebase/firebaseSetup";
import { playAnswerSound } from "../../../utils/PlayAnswerSound";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const { data, isLoading } = useFetchData();
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const id = Number(categoryId);
  const { currentUser, setCurrentUser } = useAuth();

  const { mutate: mutateUserProgress } = useMutateUserProgress();
  const { mutate: mutatePoints } = useMutatePoints();

  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questionData = currentCategory?.questions[currentQuestionIndex];

  const user = auth.currentUser;

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

    const progress = currentUser.progress.find((prog) => {
      return prog.id === id;
    });
    console.log({ currentUser });
    console.log({ progress });

    if (!progress) {
      mutateUserProgress({ currentUser, id, status: "in_progress" });
      setCurrentUser({
        ...currentUser,
        progress: [...currentUser.progress, { id, status: "in_progress" }],
      });
    }
  }, [currentUser]);

  const handleAnswerClick = (isCorrect, answerIndex) => {
    // Updates the status and colors based on the correct answer
    const updatedStatus = [...questionStatus];
    updatedStatus[currentQuestionIndex] = isCorrect ? "correct" : "incorrect";
    setQuestionStatus(updatedStatus);

    const updatedColors = [...answerColors];
    if (isCorrect) {
      updatedColors[answerIndex] = "var(--green)";
      setNotification({
        title: "YES! Right Answer",
        color: "var(--green)",
        explanation: questionData?.explanation,
      });
    } else {
      updatedColors[answerIndex] = "var(--red)";
      updatedColors[questionData.correctAnswer] = "var(--green)";
      setNotification({
        title: "OOPS! Wrong Answer",
        color: "var(--red)",
        explanation: questionData?.explanation,
      });
    }
    setAnswerColors(updatedColors);
  };

  const handleQuestionTimeOut = () => {
    playAnswerSound("incorrect");
    const updatedColors = [...answerColors];
    updatedColors[questionData.correctAnswer] = "var(--green)";
    setAnswerColors(updatedColors);
    setNotification({
      title: "Time Is Out!",
      color: "var(--red)",
      explanation: questionData?.explanation,
    });
  };

  const handleAnswerClickWithStatus = (answerIndex, remainingTime) => {
    const isCorrect = answerIndex === questionData.correctAnswer;
    const updatedStatus = [...questionStatus];
    const status = isCorrect ? "correct" : "incorrect";
    updatedStatus[currentQuestionIndex] = status;

    playAnswerSound(status);

    handleAnswerClick(isCorrect, answerIndex);

    let points = 0;

    if (isCorrect) {
      points += 10;
      if (remainingTime >= 7) {
        points += 3;
      }
    }

    mutatePoints({
      userId: user.uid,
      points: points,
    });
  };

  //
  // useEffect(() => {
  //   console.log("currentQuestionIndex", currentQuestionIndex);
  //   console.log("currentCategory?.questions.length", currentCategory?.questions.length);
  //   if (currentQuestionIndex > currentCategory?.questions.length - 1 && !notification) {
  //     updateUserPoints(5).then(() => {
  //       navigate("/");
  //     });
  //   } else {
  //     notification && currentQuestionIndex < currentCategory?.questions.length - 1;
  //   }
  // }, [notification]);
  //

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentCategory?.questions.length - 1) {
      // Move to the next question
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setAnswerColors(Array(4).fill("var(--blue)"));
      setNotification(null);
    } else {
      setNotification(null);
      console.log({ currentUser });
      const progress = currentUser.progress.find((prog) => {
        console.log({ prog }, id);
        return prog.id === id;
      });
      console.log({ progress });

      if (progress && progress.status !== "completed") {
        //a user can come back to this category again and click the questions so it can be done already

        mutateUserProgress({ currentUser, id, status: "completed" });
        setCurrentUser({
          ...currentUser,
          progress: currentUser.progress.map((prog) =>
            prog.id === id ? { ...prog, status: "completed" } : prog,
          ),
        });
      }
      updateUserPoints(5).then(() => {
        navigate("/");
      });
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
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
};
