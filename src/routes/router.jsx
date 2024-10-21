import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LOGIN, QUIZ, ROOT, LEADER_BOARD } from "./routeConstants";

import Home from "@/pages/Home/Home";

import RootLayout from "../layouts/RootLayout";
import Page404 from "@/pages/Page404/Page404";
import { QuizProvider } from "../features/Quiz/context/QuizContext.jsx";
import Quiz from "@/pages/Quiz/Quiz";
const Login = React.lazy(() => import("@pages/Login/Login"));
const LeaderBoard = React.lazy(() => import("../pages/LeaderBoard/LeaderBoard.jsx"));
const router = createBrowserRouter([
  {
    path: ROOT,
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: `${QUIZ}/:categoryId`,
        element: (
          <QuizProvider>
            <Quiz />
          </QuizProvider>
        ),
      },
      {
        path: LOGIN,
        element: <Login />,
      },
      {
        path: LEADER_BOARD,
        element: <LeaderBoard />,
      },
    ],
  },
  { path: "*", element: <Page404 /> },
]);

export default router;
