import React from "react";

import "../../styles/MainContents/Categories.css";

import breakfastIcon from "../../assets/icons/breakfast.png"; // Update the path to your icons
import veganIcon from "../../assets/icons/vegan.png";
import meatIcon from "../../assets/icons/meat.png";
import dessertIcon from "../../assets/icons/dessert.png";
import lunchIcon from "../../assets/icons/lunch.png";
import chocolateIcon from "../../assets/icons/chocolate.png";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    label: "Breakfast",
    icon: breakfastIcon,
    gradient: "linear-gradient(to bottom, #70824600, #7082461A)",
  },
  {
    label: "Vegan",
    icon: veganIcon,
    gradient:
      "linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)",
  },
  {
    label: "Meat",
    icon: meatIcon,
    gradient: "linear-gradient(to bottom,#CC261B00, #CC261B1A)",
  },
  {
    label: "Dessert",
    icon: dessertIcon,
    gradient: "linear-gradient(to bottom,#F09E0000, #F09E001A)",
  },
  {
    label: "Lunch",
    icon: lunchIcon,
    gradient:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)",
  },
  {
    label: "Chocolate",
    icon: chocolateIcon,
    gradient:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)",
  },
];

const Categories: React.FC = () => {
  return (
    <>
      <div className="section-title-wrapper">
        <div className="self-center section-title">Categories</div>
        <button className="view-all-button">View All Categories</button>
      </div>
      <section className="categories-container">
        <div className="categories">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              label={category.label}
              gradient={category.gradient}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Categories;
