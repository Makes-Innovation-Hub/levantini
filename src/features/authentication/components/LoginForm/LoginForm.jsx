import React from "react";
import { Title } from "./LoginForm.styles";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import SignInWithGoogle from "../SignInButton/SignInWithGoogle";
import LogoutGoogle from "../LogoutButton/LogoutGoogle";

const LoginForm = () => {
  const { currentUser, signInWithGoogle, logout } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle(() => {
      navigate("/");
    });
  };

  return (
    <>
      <Title>Levantini</Title>
      {!currentUser ? (
        <SignInWithGoogle handleClick={handleGoogleSignIn} />
      ) : (
        <LogoutGoogle handleClick={logout} />
      )}
    </>
  );
};

export default LoginForm;
