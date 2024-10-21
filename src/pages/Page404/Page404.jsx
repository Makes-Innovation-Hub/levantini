import React from "react";
import * as S from "./Page404.styles";

export default function Page404() {
  return (
    <S.Container>
      <S.TextContainer>
        <S.Title>Uh, ohh!</S.Title>
        <S.SubTitle>We Sincerely Apologize</S.SubTitle>
        <S.Description>We can't find the page that you are looking for!</S.Description>
        <S.Button href="/">Go Home</S.Button>
      </S.TextContainer>
      <S.ImageContainer>
        <img
          src="../../../public/images/0060e6bb1e19a06d13b8f3ab4d0d9757.png"
          alt="404 Error Robot"
        />
      </S.ImageContainer>
    </S.Container>
  );
}
