import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "@features/authentication/components/LoginForm";
import { Container } from "./login.styles";
import { Title } from "../../features/authentication/components/Title/loginTitle";
import { useAuth } from "../../features/authentication/context/AuthContext";

const Login = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  // const location = useLocation();

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
