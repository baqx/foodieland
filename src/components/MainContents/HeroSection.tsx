import React from "react";
import "../../styles/MainContents/HeroSection.css";
import { FaPlayCircle, FaScroll, FaStopwatch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ImSpoonKnife } from "react-icons/im";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="HeroSection">
      <div className="HeroSection__content">
        <div className="HeroSection__tag">
          <span>
            <FaScroll />
          </span>
          <span>Hot Recipes</span>
        </div>
        <h1 className="HeroSection__title">Spicy delicious chicken wings</h1>
        <p className="HeroSection__description  my-5">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        <div className="HeroSection__meta">
          <div className="HeroSection__chip-Wrapper my-10">
            <div className="HeroSection__chip">
              <FaStopwatch /> <span>30 Minutes</span>
            </div>
            <div className="HeroSection__chip">
              <ImSpoonKnife />
              <span>Chicken</span>
            </div>
          </div>
        </div>
        <div className="HeroSection__author self-center">
          <div className="HeroSection__name-date-avatar self-center">
            <img
              src="images/avatar.png"
              alt="John Smith"
              className="HeroSection__author-avatar self-center"
            />
            <div className="HeroSection__meta self-center align-middle">
              <span className="HeroSection__author-name">John Smith</span>
              <span className="HeroSection__date">15 March 2022</span>
            </div>
          </div>

          <button
            onClick={() => navigate("/RecipePage")}
            className="HeroSection__cta self-center"
          >
            View Recipes <FaPlayCircle />
          </button>
        </div>
      </div>
      <div className="HeroSection__image">
        <img src="images/hero.png" alt="Spicy delicious chicken wings" />
        <div className="HeroSection__badge">
          <img src="images/Badge.png" alt="Handpicked recipes" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
