// NutritionCard.tsx
import React from "react";
import "../../styles/RecipePageComponents/NutritionCard.css";

interface NutritionInfo {
  calories: number;
  totalFat: number;
  protein: number;
  carbohydrate: number;
  cholesterol: number;
}

const NutritionCard: React.FC<{ nutritionInfo: NutritionInfo }> = ({
  nutritionInfo,
}) => {
  return (
    <section>
      <div className="nutrition-card">
        <div className="image-container">
          <img src="images/thumbnail.png" alt="Nutritious meal" />
          <div className="play-button"></div>
        </div>
        <div className="content-container">
          <div className="nutrition-info">
            <h2>Nutrition Information</h2>
            <ul>
              <li>
                <span className="param">Calories</span>
                <span className="value">{nutritionInfo.calories} kcal</span>
              </li>
              <li>
                <span className="param">Total Fat</span>
                <span className="value">{nutritionInfo.totalFat}g</span>
              </li>
              <li>
                <span className="param">Protein</span>
                <span className="value">{nutritionInfo.protein}g</span>
              </li>
              <li>
                <span className="param">Carbohydrate</span>
                <span className="value">{nutritionInfo.carbohydrate}g</span>
              </li>
              <li>
                <span className="param">Cholesterol</span>
                <span className="value">{nutritionInfo.cholesterol}mg</span>
              </li>
            </ul>
          </div>
          <p className="lorem-ipsum">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="overview">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </section>
  );
};

export default NutritionCard;
