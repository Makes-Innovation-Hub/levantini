import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LOGIN, QUIZ, ROOT } from "./routeConstants";
import Home from "@/pages/Home/Home";
import Quiz from "../pages/Page404/Quiz/Quiz";
import RootLayout from "../layouts/RootLayout";
import Page404 from "@/pages/Page404/Page404";
const Login = React.lazy(() => import("@pages/Login/Login"));

const router = createBrowserRouter([
  {
    path: ROOT,
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: QUIZ,
        element: <Quiz />,
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
