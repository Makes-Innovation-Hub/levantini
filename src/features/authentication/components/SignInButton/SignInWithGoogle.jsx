import React from "react";

import * as S from "../SignInButton/SignInWithGoogle.styles";

function SignInWithGoogle({ handleClick , }) {
  return (
    <>
      <S.GoogleSignInButton onClick={handleClick}></S.GoogleSignInButton>
    </>
  );
}

export default SignInWithGoogle;
