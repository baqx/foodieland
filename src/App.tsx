import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import HeroSection from "./components/MainContents/HeroSection";
import Categories from "./components/MainContents/Categories";
import Recipes from "./components/MainContents/Recipes";
import ChefShowcase from "./components/MainContents/ChefShowcase";
import InstagramSection from "./components/MainContents/InstagramSection";
import MoreRecipes from "./components/MainContents/MoreRecipes";
import NewsletterSignup from "./components/MainContents/NewsletterSignup";

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <main>
        <HeroSection />
        <Categories />
        <Recipes />
        <ChefShowcase />
        <InstagramSection />
        <MoreRecipes />
        <NewsletterSignup />
        <Footer />
      </main>
    </div>
  );
};

export default App;
