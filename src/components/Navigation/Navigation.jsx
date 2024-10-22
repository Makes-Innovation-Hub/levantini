import React, { startTransition } from "react";
import { MdHome } from "react-icons/md";
import { LiaCrownSolid } from "react-icons/lia";
import { LogoutGoogle } from "../../features/authentication";
import { useAuth } from "../../features/authentication/context/AuthContext";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ closeMenu }) => {
  const { logout } = useAuth();
  const handleMenuClose = () => {
    startTransition(() => {
      closeMenu();
    });
  };
  return (
    <ul className="menu-options">
      <li onClick={handleMenuClose}>
        <MdHome className="theIcons" />
        <Link to="/" className="firstLink">
          <span className="HomeIcon">Home</span>
        </Link>
      </li>
      <li onClick={handleMenuClose}>
        <LiaCrownSolid className="theIcons" />
        <Link to="/LeaderBoard" className="firstLink">
          <span className="HomeIcon">Leaderboard</span>
        </Link>
      </li>
      <li className="secondLink">
        <LogoutGoogle handleClick={logout} />
      </li>
    </ul>
  );
};

export default Navigation;
