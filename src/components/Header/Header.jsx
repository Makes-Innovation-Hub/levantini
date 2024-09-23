import { useLocation } from "react-router-dom";
import Logo from "../ui/Logo/Logo";
import * as S from "./Header.styles";
import { LOGIN } from "../../routes/routeConstants";

export default function Header() {
  const location = useLocation();
  if (location.pathname == LOGIN) {
    return;
  }
  return (
    <S.Header>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
    </S.Header>
  );
}
