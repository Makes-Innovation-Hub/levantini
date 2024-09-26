import { useLocation } from "react-router-dom";
import Logo from "../ui/Logo/Logo";
import * as S from "./Header.styles";
import { LOGIN } from "../../routes/routeConstants";
import LogoutGoogle from "../../features/authentication/components/LogoutButton";
import { useAuth } from "../../features/authentication/context/AuthContext";
export default function Header() {
  const location = useLocation();
  const { logout } = useAuth();
  if (location.pathname == LOGIN) {
    return;
  }
  return (
    <S.Header>
      <LogoutGoogle handleClick={logout} />
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
    </S.Header>
  );
}
