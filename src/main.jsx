import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/redux/configureStore.js";
import App from "./App.jsx";
import router from "./routes/router.jsx";
import "./styles/vendors/normalize.css";
import "./index.css";
import "./styles/colors.css";
import "./styles/fonts.css";
import "./styles/base.css";
import { AuthProvider } from "./features/authentication/context/AuthContext.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query/react-query.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
    ,
  </React.StrictMode>,
);
