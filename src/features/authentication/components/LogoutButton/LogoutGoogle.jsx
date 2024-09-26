import React from "react";
import * as S from "./LogoutGoogle.style";
// import { FiLogOut } from "react-icons/fi";

function LogoutGoogle({ handleClick }) {
  return (
    <S.LogoutGoogle onClick={handleClick}>
      {/* <FiLogOut /> */}
      Log out
    </S.LogoutGoogle>
  );
}

export default LogoutGoogle;
