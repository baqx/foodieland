import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import "../styles/Header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-title">
        Foodieland<span style={{ color: "red" }}>.</span>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#" onClick={toggleMenu}>Home</a>
        <a href="#" onClick={toggleMenu}>Recipes</a>
        <a href="#" onClick={toggleMenu}>Blog</a>
        <a href="#" onClick={toggleMenu}>Contact</a>
        <a href="#" onClick={toggleMenu}>About us</a>
      </nav>
      <div className="header-icons">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
      </div>
    </header>
  );
};

export default Header;