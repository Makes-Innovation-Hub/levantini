import React from "react";
import { Container, GoogleSignInButton, Title } from "./LoginForm.styles";
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <div>
      <Title>Levantini</Title>
      <Container>
        <GoogleSignInButton onClick={signInWithGoogle}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
            alt="Google icon"
            width="70"
          />
          Sign in with Google
        </GoogleSignInButton>
      </Container>
    </div>
  );
};

export default LoginForm;
