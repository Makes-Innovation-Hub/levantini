import React from "react";
import { Container, GoogleSignInButton, Title } from "./LoginForm.styles";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../../lib/firebaseSetup";

const LoginForm = () => {
  const handleGoogle = async () => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  return (
    <div>
      <Title>Levantini</Title>
      <Container>
        <GoogleSignInButton onClick={handleGoogle}>
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
