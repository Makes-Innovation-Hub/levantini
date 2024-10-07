import React, { useState } from 'react';
import './Menu.css'; 
import { MdHome } from "react-icons/md";
import { LiaCrownSolid } from "react-icons/lia";
import { IoIosLogOut } from "react-icons/io";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div>
      <div className="menu-container">
        {!isOpen && (
          <div className="menu-icon" onClick={toggleMenu}>
            ☰ 
          </div>
        )}

        {isOpen && (
          <>
            <div className="overlay" onClick={closeMenu} />
            <div className="side-menu">
              <button className="close-button" onClick={closeMenu}>
                &times; 
              </button>
              <h1 className='name'>Levantini</h1>
              <ul className="menu-options">
                <li><MdHome /> Home</li>
                <li><LiaCrownSolid /> Leaderboard</li>
                <li><IoIosLogOut /> Log out</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;
