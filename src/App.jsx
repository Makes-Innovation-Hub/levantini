import { createBrowserRouter, Router } from "react-router-dom";
import "./App.css";
import RouteConfig from "./routes/router";
import LoginForm from "./features/authentication/components/LoginForm/LoginForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello</div>, // Use the Layout component here
    children: [
      { path: "/", element: <div>home</div> },
      { path: "/loginPage", element: <LoginForm /> },
    ],
  },
]);

function App() {
  return <>{router}</>;
}

export default App;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />, // Use the Layout component here
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/loginPage", element: <LoginForm /> },
//       { path: "/register", element: <Register /> },
//       { path: "/all-events", element: <AllEvent /> },
//       { path: "/about", element: <About /> },
//       { path: "/Profile", element: <Profile /> },

//       <ToastContainer key="toast-container" />,
//     ],
//   },
// ]);
