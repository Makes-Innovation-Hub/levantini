import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LOGIN, ROOT, CATEGORY } from "./routeConstants";
import Home from "@/pages/Home";
import Layout from "../Layout/Layout"; // Import the Layout component

const Login = React.lazy(() => import("@pages/Login"));
const Category = React.lazy(() => import("@/pages/Category"));

const router = createBrowserRouter([
  {
    path: ROOT,
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: LOGIN,
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: CATEGORY,
    element: (
      <Layout>
        <Category />
      </Layout>
    ),
  },
  {
    path: "*",
    element: <div>Not found</div>,
  },
]);

export default router;
