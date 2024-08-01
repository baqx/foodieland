import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsletterSignup from "./MainContents/NewsletterSignup";
import MoreRecipes from "./RecipePageComponents/MoreRecipes";
import InfoCard from "./RecipePageComponents/InfoCard";
import NutritionCard from "./RecipePageComponents/NutritionCard";
import RecipeDetails from "./RecipePageComponents/RecipeDetails";

const RecipePage: React.FC = () => {
  const nutritionInfo = {
    calories: 218.9,
    totalFat: 10.7,
    protein: 7.9,
    carbohydrate: 22.3,
    cholesterol: 37.4,
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <InfoCard />
      <NutritionCard nutritionInfo={nutritionInfo} />
      <RecipeDetails />
      <NewsletterSignup />
      <MoreRecipes />
      <Footer />
    </div>
  );
};

export default RecipePage;
