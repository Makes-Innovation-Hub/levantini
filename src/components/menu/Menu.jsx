// Menu.js
import React, { useState } from 'react';
import './Menu.css'; 
import Navigation from '../Navigation/Navigation';
import { useAuth } from "../../features/authentication/context/AuthContext";
import { LOGIN } from "../../routes/routeConstants";
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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
            <Navigation closeMenu={closeMenu} /> 
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
