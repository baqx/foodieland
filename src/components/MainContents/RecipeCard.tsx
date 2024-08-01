import React from "react";
import "../../styles/MainContents/RecipeCard.css";
import {FaStopwatch} from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { useNavigate } from "react-router-dom";
interface RecipeCardProps {
  image: string;
  title: string;
  time: string;
  category: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  image,
  title,
  time,
  category,
}) => {
  const navigate = useNavigate();
  return (
    <div className="recipe-card" onClick={() => navigate("/RecipePage")}>
      <img src={image} alt={title} className="recipe-image" />
      <div className="recipe-content">
        <h3 className="recipe-title">{title}</h3>

        {/* Conditionally render recipe icons so that it wont show the icons if it is an ad */}
        {time !== "" && (
          <div className="recipe-info">
            <span className="recipe-time">
              <FaStopwatch /> {time}
            </span>
            <div>
              <ImSpoonKnife />
              <span className="recipe-category">{category}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
