import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LOGIN, QUIZ, ROOT } from "./routeConstants";
import Home from "@/pages/Home/Home";

import RootLayout from "../layouts/RootLayout";
import Page404 from "@/pages/Page404/Page404";
import { QuizProvider } from "../features/Quiz/hooks/QuizQuestionBoxContext.jsx";
const Login = React.lazy(() => import("@pages/Login/Login"));
const Quiz = React.lazy(() => import("../pages/Quiz/Quiz.jsx"));

const router = createBrowserRouter([
  {
    path: ROOT,
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: QUIZ,
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
    ],
  },
  { path: "*", element: <Page404 /> },
]);

export default router;
