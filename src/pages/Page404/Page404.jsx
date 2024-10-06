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
          src={
            "https://s3-alpha-sig.figma.com/img/c6be/28f9/0060e6bb1e19a06d13b8f3ab4d0d9757?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TfsmF5SWIzEf6tyHRlVKey8EOLvcKQmL83L7RKsNLqGLhKJaSeNlphEm7gr3T7V4gTBV5IBiRbqMISmJ3GiIp9JvtJ03Bl082XmTcETvSMEr0BH9zcJnp58U7YeaeE9DlcakPu17tV-ZGKVu1NnpBnTs9kmTM9Jy1-BSLq4sIBMwXDp4DFM8UrMIPuhFRiF9kw-3Rjq1S24BBr-IgXAyPPUkxZPS8jxtrCx5R3NzecvoPDv71RICL~Nx3tLI~w7QK~TIuAF8bezg71KwRlkFveJQxL3AeJ4kYcLTj67RbZgIPY0A23YwXNi52JQ0GQpO2Q6l8zekiD27Mq4a7CZwlg__"
          }
          alt="404 Error Robot"
        />
      </S.ImageContainer>
    </S.Container>
  );
}
