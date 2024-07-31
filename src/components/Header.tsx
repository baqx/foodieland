import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-title">
        Foodieland<span style={{ color: "red" }}>.</span>
      </div>
      <nav className="header-nav">
        <a href="#">Home</a>
        <a href="#">Recipes</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        <a href="#">About us</a>
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
