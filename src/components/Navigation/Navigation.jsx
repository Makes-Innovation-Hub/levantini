import React from 'react';
import { MdHome } from "react-icons/md";
import { LiaCrownSolid } from "react-icons/lia";
import { IoIosLogOut } from "react-icons/io";
import { LogoutGoogle } from '../../features/authentication';
import { useAuth } from "../../features/authentication/context/AuthContext";
import { Link } from 'react-router-dom';

const Navigation = ({ closeMenu }) => {
  const { logout } = useAuth();

  return (
    <ul className="menu-options">
      <li onClick={closeMenu}>
        <Link to="/" className="firstLink">
          <MdHome className="theIcons" /> Home
        </Link>
      </li>
      <li onClick={closeMenu}>
        <Link to="/" className="firstLink">
          <LiaCrownSolid className="theIcons" /> Leaderboard
        </Link>
      </li>
      <li className="secondLink">
        
        <LogoutGoogle handleClick={logout} />
      </li>
    </ul>
  );
};

export default Navigation;
