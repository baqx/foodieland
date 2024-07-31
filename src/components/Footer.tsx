import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-title">Foodieland</div>
      <nav className="footer-nav">
        <a href="#">Recipes</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        <a href="#">About us</a>
      </nav>
      <div className="footer-icons">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
      </div>
    </footer>
  );
};

export default Footer;
