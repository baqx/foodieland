import React from "react";
import "../../styles/MainContents/HeroSection.css";
import { FaBookmark, FaPlayCircle } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <section className="app-featured">
      <div className="hero-card">
        <div className="left-section">
          <div className="hero-card-chip">
            <FaBookmark className="self-center" />
            <div className="self-center">Hot Recipees</div>
          </div>
          <div className="hero-text-wrapper">
            <div className="hero-text">Spicy delicious chicken wings</div>
            <div className="hero-text-desc">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </div>
          </div>
          <div className="hero-cta">
            <div className="hero-cta-wrap-1">
              <img
                className="hero-cta-avatar"
                src="../../assets/images/avatar.png"
              />
              <div className="flex-col">
                <h3 className="hero-cta-name">John Smith</h3>
                <p className="hero-cta-date">15 March, 2022</p>
              </div>
            </div>

            <div className="hero-cta-button flex-grow-0">
              <p className="self-center inline-block">
                <FaPlayCircle /> View Recipeees
              </p>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="hero-badge">
            <div>Hand Picked Recipee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
