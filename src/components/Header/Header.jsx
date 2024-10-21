import { useLocation } from "react-router-dom";
import Logo from "../ui/Logo/Logo";
import * as S from "./Header.styles";
import ScoreDisplay from "../ui/ScoreDisplay/ScoreDisplay";

import { LOGIN } from "../../routes/routeConstants";
import { useAuth } from "../../features/authentication/context/AuthContext";
import { LogoutGoogle } from "../../features/authentication";
export default function Header() {
  const location = useLocation();
  const { logout } = useAuth();
  if (location.pathname == LOGIN) {
    return;
  }
  return (
    <S.Header>
         <S.ScoreContainer>
        <ScoreDisplay />
      </S.ScoreContainer>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.MenuContainer>
        <Menu />
      </S.MenuContainer>
    </S.Header>
  );
}
