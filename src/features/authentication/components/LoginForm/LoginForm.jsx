import React from "react";
import { Container, GoogleSignInButton, Title } from "./LoginForm.styles";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../../lib/firebaseSetup";

const LoginForm = () => {
  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);

      console.log("User signed in:", result.user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div>
      <Title>Levantini</Title>
      <Container>
        <GoogleSignInButton onClick={handleGoogle}>
          <img
            src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-tmg5cp5v.png"
            alt="Google icon"
          />
          Sign in with Google
        </GoogleSignInButton>
      </Container>
    </div>
  );
};

export default LoginForm;
