import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./login.styles";
import { Title } from "../../features/authentication/components/Title/loginTitle";
import { useAuth } from "../../features/authentication/context/AuthContext";
import { LoginForm } from "../../features/authentication";
// This component handles the login functionality.
const Login = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/", { replace: true });
    }
  }, [currentUser, navigate]);

  if (currentUser) return null;

  return (
    <Container>
      <Title />
      <LoginForm />
    </Container>
  );
};

export default Login;
