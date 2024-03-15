import '../styles/navbar.scss';
import searchIcon from '../assets/icons8-search.svg'; // Import the search icon
import logoImage from '../assets/Images/logo.png'
import React, { useState } from 'react';

const Navbar = ({ items }) => {
  const visibleItems = items.slice(0, 7); // Show only the top 7 items
  const hiddenItems = items.slice(7); // Items beyond the top 7
  const [dropdownVisible, setDropdownVisible] = useState(false); // Define dropdownVisible state variable
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const [hoveredItem, setHoveredItem] = useState(null); // State variable to track hovered item

  return (
    <nav className="navbar">
      <div className="left">
      <img src={logoImage} alt="Logo" className="logoImg" /> {/* Logo image */}
        <span className="logo">E-COMM</span>
        <ul className="visible-items">
          {visibleItems.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
          {hiddenItems.length > 0 && (
             <li className="more" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
             <a href="#">MORE</a>
             {dropdownVisible && (
               <ul className="hidden-items">
                 {hiddenItems.map((item, index) => (
                   <li key={index}>
                     <a href="#">{item}</a>
                     {hoveredItem === item && <span className="tick">&#10003;</span>}

                   </li>
                 ))}
               </ul>
             )}
           </li>
          )}
        </ul>
      </div>
      <div className="right">
        <div className="search-bar">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <input type="text" placeholder="Search something" className="search-input" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
