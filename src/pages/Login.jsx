import React from "react";
import LoginForm from "@features/authentication/components/LoginForm";
import { useAuth } from "@features/authentication/hooks/useAuth";
import { GoogleSignInButton } from "../features/authentication/components/LoginForm/LoginForm.styles";
const Login = () => {
  return <LoginForm />;
};

export default Login;
