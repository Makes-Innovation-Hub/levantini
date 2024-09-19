import React from "react";
import * as S from "./SignInWithGoogle.styles";

function SignInWithGoogle({ handleClick }) {
  return (
    <S.GoogleSignInButton onClick={handleClick}>
      <img
        src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-tmg5cp5v.png"
        alt="Google icon"
      />
      Sign in with Google
    </S.GoogleSignInButton>
  );
}

export default SignInWithGoogle;
