import Logo from "../ui/Logo/Logo";
import * as S from "./Header.styles";
import LogoHeader from "../ui/LogoHeader/LogoHeader"

export default function Header() {
  return (
    <S.Header>
      <S.LogoContainer>
        <LogoHeader />
        <Logo />
      </S.LogoContainer>
    </S.Header>
  );
}
