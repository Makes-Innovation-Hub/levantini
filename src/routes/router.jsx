import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { leaderboard, LOGIN, QUESTION_PAGE, ROOT } from "./routeConstants";
import Home from "@/pages/Home/Home";
import QuestionPage from "../pages/QuestionPage";
import RootLayout from "../layouts/RootLayout";
import Page404 from "@/pages/Page404/Page404";
import LeaderBoard from "../components/LeaderBoard/LeaderBoard";
const Login = React.lazy(() => import("@pages/Login/Login"));

const router = createBrowserRouter([
  {
    path: ROOT,
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: QUESTION_PAGE,
        element: <QuestionPage />,
      },
      {
        path: LOGIN,
        element: <Login />,
      },
      {
        path: leaderboard,
        element: <LeaderBoard />,
      },
    ],
  },
  { path: "*", element: <Page404 /> },
]);

export default router;
