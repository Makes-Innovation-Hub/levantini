import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LOGIN, QUESTION_PAGE, ROOT } from "./routeConstants";
import Home from "@/pages/Home/Home";
import QuestionPage from "../pages/QuestionPage";
import RootLayout from "../layouts/RootLayout";
const Login = React.lazy(() => import("@pages/Login"));

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
      { path: "*", element: <div>Not found</div> },
    ],
  },
]);
export default router;
