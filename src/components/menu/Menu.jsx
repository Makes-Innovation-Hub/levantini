import React, { useState } from 'react';
import './Menu.css'; 
import { MdHome } from "react-icons/md";
import { LiaCrownSolid } from "react-icons/lia";
import { IoIosLogOut } from "react-icons/io";
import LogoutGoogle from "../../features/authentication/components/LogoutButton"; 
import { useAuth } from "../../features/authentication/context/AuthContext";
import { LOGIN } from "../../routes/routeConstants";
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  const location = useLocation(); // Get the current location

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => { setIsOpen(false); };

  // Return null if on the LOGIN page
  if (location.pathname === LOGIN) {
    return null;
  }

  return (
    <div>
      <div className="menu-container">
        {!isOpen && (
          <div className="menu-icon" onClick={toggleMenu}>
            ☰ 
          </div>
        )}

        {isOpen && <div className="overlay" onClick={closeMenu} />}
        
        {isOpen && (
          <div className="side-menu">
            <button className="close-button" onClick={closeMenu}>
              &times; 
            </button>
            <h1 className='name'>Levantini</h1>
            <ul className="menu-options">
              <li onClick={closeMenu} style={{ cursor: 'pointer' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MdHome /> Home
                </Link>
              </li>
              <li><LiaCrownSolid /> Leaderboard</li>
              <li style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={logout}>
                <IoIosLogOut style={{ marginRight: '8px' }} /> 
                <LogoutGoogle handleClick={logout} />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;

