import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3 className="footer-title">
           
            Foodieland<span style={{ color: "red" }}>.</span>
          </h3>
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consecteturadipiscing elit
          </p>
        </div>
        <nav className="footer-nav">
          <ul>
            <li>
              <a href="/recipes">Recipes</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <div></div>
        <p className="footer-copyright">© {currentYear} Flowbase. Powered by Webflow</p>
        <div className="footer-social">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
