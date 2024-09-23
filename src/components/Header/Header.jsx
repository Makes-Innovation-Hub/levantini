import Logo from "../ui/Logo/Logo";
import * as S from "./Header.styles";

export default function Header() {
  return (
    <S.Header>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
    </S.Header>
  );
}
