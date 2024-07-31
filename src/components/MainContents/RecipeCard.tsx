import React from "react";
import "../../styles/MainContents/RecipeCard.css";
import { FaClock, FaFolder, FaUtensilSpoon } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
interface RecipeCardProps {
  image: string;
  title: string;
  time: string;
  category: string;
  categoryIcon: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  image,
  title,
  time,
  category,
  categoryIcon,
}) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <div className="recipe-content">
        <h3 className="recipe-title">{title}</h3>
        <div className="recipe-info">
          <span className="recipe-time">
            <FaClock /> {time}
          </span>
          <div>
            <ImSpoonKnife />
            <span className="recipe-category">{category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;