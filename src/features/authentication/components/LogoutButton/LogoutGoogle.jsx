import React from "react";
import * as S from "./LogoutGoogle.style";
import { FiLogOut } from "react-icons/fi";

function LogoutGoogle({ handleClick }) {
  return (
    <S.LogoutGoogle onClick={handleClick}>
      Log out
      <FiLogOut />
    </S.LogoutGoogle>
  );
}

export default LogoutGoogle;
