import React from "react";
import RecipeCard from "./RecipeCard";
import "../../styles/MainContents/Recipes.css";

const recipes = [
  {
    image: "images/recipes/burger.png",
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutes",
    category: "Snack",

  },
  {
    image: "images/recipes/salmon.png",
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    time: "30 Minutes",
    category: "Healthy",

  },
  {
    image: "images/recipes/pancake.png",
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    time: "30 Minutes",
    category: "Breakfast",

  },
  {
    image: "images/recipes/mayonnaise-salad.png",
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    time: "30 Minutes",
    category: "Healthy",

  },
  {
    image: "images/recipes/meatballs.png",
    title: "Chicken Meatballs with Cream Cheese",
    time: "30 Minutes",
    category: "Meat",

  },
  {
    image: "images/recipes/food-ad.png",
    title: "Don't forget to eat healthy food",
    time: "",
    category: "",

  },
  {
    image: "images/recipes/orange-blueberry-pancake.png",
    title: "Fruity Pancake with Orange & Blueberry",
    time: "30 Minutes",
    category: "Sweet",

  },
  {
    image: "images/recipes/chicken-rice.png",
    title: "The Best Easy One Pot Chicken and Rice",
    time: "30 Minutes",
    category: "Meat",

  },
  {
    image: "images/recipes/chicken-rice.png",
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    time: "30 Minutes",
    category: "Pasta",
  
  },
];

const Recipes: React.FC = () => {
  return (
    <div className="recipes-container">
      <h1 className="recipes-title">Simple and tasty recipes</h1>
      <p className="recipes-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="recipes-grid">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            image={recipe.image}
            title={recipe.title}
            time={recipe.time}
            category={recipe.category}
        
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
