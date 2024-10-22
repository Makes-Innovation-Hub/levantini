// import React, { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import useFetchData from "../../../api/hooks/useFetchData";
// import { useMutatePoints } from "../../../api/hooks/useMutationPoints";
// import { updateUserPoints } from "../../../lib/Firebase/userService";
// import { auth } from "../../../lib/Firebase/firebaseSetup";
// import { playAnswerSound } from "../../../utils/PlayAnswerSound";

// const QuizContext = createContext();

// export const QuizProvider = ({ children }) => {
//   const { data, isLoading } = useFetchData();
//   const navigate = useNavigate();
//   const { categoryId } = useParams();
//   const [currentCategory, setCurrentCategory] = useState(null);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const questionData = currentCategory?.questions[currentQuestionIndex];
//   const { mutate: mutatePoints } = useMutatePoints();
//   const user = auth.currentUser;
//   const [questionStatus, setQuestionStatus] = useState(
//     Array(currentCategory?.questions.length).fill(null),
//   );
//   const [answerColors, setAnswerColors] = useState(Array(4).fill("var(--blue)"));
//   const [notification, setNotification] = useState(null);

//   useEffect(() => {
//     if (!data) return;
//     const category = data.filter((el) => el.id === Number(categoryId));
//     setCurrentCategory(category[0]);
//   }, [categoryId, data]);

//     const updatedStatus = [...questionStatus];
//     updatedStatus[currentQuestionIndex] = isCorrect ? "correct" : "incorrect";
//     setQuestionStatus(updatedStatus);

//     const updatedColors = [...answerColors];
//     if (isCorrect) {
//       updatedColors[answerIndex] = "var(--green)";
//       setNotification({
//         title: "YES! Right Answer",
//         color: "var(--green)",
//         explanation: questionData?.explanation,
//       });
//     } else {
//       updatedColors[answerIndex] = "var(--red)";
//       updatedColors[questionData.correctAnswer] = "var(--green)";
//       setNotification({
//         title: "OOPS! Wrong Answer",
//         color: "var(--red)",
//         explanation: questionData.explanation,
//       });
//     }
//     setAnswerColors(updatedColors);
//   };

//   const handleQuestionTimeOut = () => {
//     playAnswerSound("incorrect");
//     const updatedColors = [...answerColors];

//     updatedColors[questionData.correctAnswer] = "var(--green)";
//     setAnswerColors(updatedColors);
//     setNotification({
//       title: "Time Is Out!",
//       color: "var(--red)",
//       explanation: questionData.explanation,
//     });
//   };

//   const handleAnswerClickWithStatus = (answerIndex, remainingTime) => {
//     const isCorrect = answerIndex === questionData.correctAnswer;
//     const status = isCorrect ? "correct" : "incorrect";
//     playAnswerSound(status);

//     const updatedStatus = [...questionStatus];
//     updatedStatus[currentQuestionIndex] = status;
//     setQuestionStatus(updatedStatus);

//     handleAnswerClick(isCorrect, answerIndex);

//   let points = 0;

//   if (isCorrect) {
//     points += 10;
//     if (remainingTime >= 7) {
//       points += 3;
//     }
//   }

//   mutatePoints({
//     userId: user.uid,
//     points: points,
//   })};

//   useEffect(() => {
//     if ((currentQuestionIndex > currentCategory?.questions.length - 1) & !notification) {
//       navigate("/");
//     }
//   }, [notification]);
//   const handleNextQuestion = async () => {
//     if (currentQuestionIndex < currentCategory?.questions.length - 1) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//       setAnswerColors(Array(4).fill("var(--blue)"));
//       setNotification(null);
//     } else {
//       await updateUserPoints(5);
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//       setNotification(null);
//     }
//   };
//   const handleQuestionTimeOutWithStatus = (questionIndex) => {
//     const updatedStatus = [...questionStatus];
//     updatedStatus[questionIndex] = "timeout";
//     setQuestionStatus(updatedStatus);
//     handleQuestionTimeOut();
//   };
//   return (
//     <QuizContext.Provider
//       value={{
//         questionData,
//         answerColors,
//         handleAnswerClickWithStatus,
//         handleQuestionTimeOutWithStatus,
//         notification,
//         handleNextQuestion,
//         questionStatus,
//         currentQuestionIndex,
//         currentCategory,
//         isLoading,
//       }}
//     >
//       {children}
//     </QuizContext.Provider>
//   );
// };
// export const useQuizContext = () => {
//   const context = useContext(QuizContext);
//   if (!context) {
//     throw new Error("useQuizContext must be used within an QuizProvider");
//   }
//   return context;
// };

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
  const { currentUser, signInWithGoogle, logout } = useAuth();
  console.log({ currentUser });

  ///

  const { mutate: mutateUserProgress } = useMutateUserProgress();
  ///
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questionData = currentCategory?.questions[currentQuestionIndex];
  const { mutate: mutatePoints } = useMutatePoints();
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
      updateUserPoints(5).then(() => {
        navigate("/");
      });
    } else {
      notification && currentQuestionIndex < currentCategory?.questions.length - 1;
    }
  }, [notification]);
  //

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentCategory?.questions.length - 1) {
      // Move to the next question
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setAnswerColors(Array(4).fill("var(--blue)"));
      setNotification(null);
    } else {
      setNotification(null);
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
