import Logo from "../ui/Logo/Logo";
import * as S from "./Header.styles";
import ScoreDisplay from "../ui/ScoreDisplay/ScoreDisplay";

export default function Header() {
  return (
    <S.Header>
      <ScoreDisplay />
      <Logo />
      {/* hamburger menu and google image component below */}
      <div></div>
    </S.Header>
  );
}
