import React from "react";
import "../../styles/MainContents/MoreRecipes.css";
import {FaStopwatch } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { useNavigate } from "react-router-dom";

interface Recipe {
  id: number;
  title: string;
  image: string;
  time: string;
  category: string;
}

const recipes: Recipe[] = [
  {
    id: 1,
    title: "Mixed Tropical Fruit Salad with Superfood Boosts",
    image: "images/morerecipes/fruit-salad.png",
    time: "30 Minutes",
    category: "Healthy",
  },
  {
    id: 2,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    image: "images/morerecipes/wagyu-beef.png",
    time: "30 Minutes",
    category: "Western",
  },
  {
    id: 3,
    title: "Healthy Japanese Fried Rice with Asparagus",
    image: "images/morerecipes/fried-rice.png",
    time: "30 Minutes",
    category: "Healthy",
  },
  {
    id: 4,
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    image: "images/morerecipes/vegetarian-taco.png",
    time: "30 Minutes",
    category: "Eastern",
  },
  {
    id: 5,
    title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
    image: "images/morerecipes/chicken-salad.png",
    time: "30 Minutes",
    category: "Healthy",
  },
  {
    id: 6,
    title: "Barbeque Spicy Sandwiches with Chips",
    image: "images/morerecipes/spicy-sandwiches.png",
    time: "30 Minutes",
    category: "Snack",
  },
  {
    id: 7,
    title: "Firecracker Vegan Lettuce Wraps - Spicy!",
    image: "images/morerecipes/lettuce-wraps.png",
    time: "30 Minutes",
    category: "Seafood",
  },
  {
    id: 8,
    title: "Chicken Ramen Soup with Mushroom",
    image: "images/morerecipes/ramen-soup.png",
    time: "30 Minutes",
    category: "Japanese",
  },
];

const MoreRecipes: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="more-recipe-gallery">
      <div className="more-recipe-title-wrapper">
        <h1>Try this delicious recipe to make your day</h1>
        <p className="more-subtitle">
          Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua enim ad minim
        </p>
      </div>

      <div className="more-recipe-grid">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            onClick={() => navigate("/RecipePage")}
            className="more-recipe-card"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="more-recipe-image"
            />
            <div className="more-recipe-info">
              <h3>{recipe.title}</h3>
              <div className="more-recipe-meta">
                <span className="more-recipe-time">
                  <FaStopwatch style={{ fontSize: "1.2em" }} />
                  <span>{recipe.time}</span>
                </span>
                <span className="more-recipe-category">
                  <ImSpoonKnife style={{ fontSize: "1.2em" }} />
                  {recipe.category}
                </span>
              </div>
            </div>
            <button className="more-favorite-btn" aria-label="Add to favorites">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreRecipes;
