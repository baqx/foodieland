import React from "react";
import "../../styles/MainContents/HeroSection.css";
import { FaPlayCircle, FaScroll, FaStopwatch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ImSpoonKnife } from "react-icons/im";

interface HeroSectionProps {
  title: string;
  description: string;
  time: string;
  category: string;
  authorName: string;
  authorDate: string;
  imageSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  time,
  category,
  authorName,
  authorDate,
  imageSrc,
}) => {
  const navigate = useNavigate();

  return (
    <div className="HeroSection">
      <div className="HeroSection__content">
        <div className="HeroSection__tag">
          <span>
            <FaScroll style={{ color: "brown" }} />
          </span>
          <span>Hot Recipes</span>
        </div>
        <h1 className="HeroSection__title">{title}</h1>
        <p className="HeroSection__description my-5">{description}</p>
        <div className="HeroSection__meta">
          <div className="HeroSection__chip-Wrapper my-10">
            <div className="HeroSection__chip">
              <FaStopwatch /> <span>{time}</span>
            </div>
            <div className="HeroSection__chip">
              <ImSpoonKnife />
              <span>{category}</span>
            </div>
          </div>
        </div>
        <div className="HeroSection__author self-center">
          <div className="HeroSection__name-date-avatar self-center">
            <img
              src="images/avatar.png"
              alt={authorName}
              className="HeroSection__author-avatar self-center"
            />
            <div className="HeroSection__meta self-center align-middle">
              <span className="HeroSection__author-name">{authorName}</span>
              <span className="HeroSection__date">{authorDate}</span>
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
        <img src={imageSrc} alt={title} />
        <div className="HeroSection__badge">
          <img src="images/Badge.png" alt="Handpicked recipes" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;