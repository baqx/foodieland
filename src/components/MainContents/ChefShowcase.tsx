import React from "react";
import "../../styles/MainContents/ChefShowcase.css";

const ChefShowcase: React.FC = () => {
  return (
    <div className="chef-showcase">
      <div className="showcase-content">
        <h1 className="chef-showcase-title">
          Everybody can be a chef in their own kitchen
        </h1>
        <p className="chef-showcase-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="#" className="learn-more">
          Learn More
        </a>
      </div>
      <div className="showcase-image">
        <img src={"/images/chef.png"} alt="Chef" className="chef-image" />
        <img
          src={"/images/icons/dessert.png"}
          alt="Ingredient1"
          className="ingredient ingredient1"
        />
        <img
          src={"/images/icons/lunch.png"}
          alt="Ingredient2"
          className="ingredient ingredient2"
        />
        <img
          src={"/images/icons/meat.png"}
          alt="Ingredient3"
          className="ingredient ingredient3"
        />
        <img
          src={"/images/icons/vegan.png"}
          alt="Ingredient4"
          className="ingredient ingredient4"
        />
      </div>
    </div>
  );
};

export default ChefShowcase;
