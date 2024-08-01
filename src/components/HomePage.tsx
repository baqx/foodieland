import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/MainContents/HeroSection";
import Categories from "../components/MainContents/Categories";
import Recipes from "../components/MainContents/Recipes";
import ChefShowcase from "../components/MainContents/ChefShowcase";
import InstagramSection from "../components/MainContents/InstagramSection";
import MoreRecipes from "../components/MainContents/MoreRecipes";
import NewsletterSignup from "../components/MainContents/NewsletterSignup";
import HeroSectionSlider from "./MainContents/HeroSectionSlider";
import { Fade, Zoom } from "react-awesome-reveal";
const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Fade>
          <HeroSectionSlider />
        </Fade>
        <Fade>
          <Categories />
        </Fade>
        <Fade>
          <Recipes />
        </Fade>
        <Zoom>
          <ChefShowcase />
        </Zoom>
        <Fade>
          <InstagramSection />
        </Fade>
        <Fade>
          <MoreRecipes />
        </Fade>
        <Fade>
          <NewsletterSignup />
        </Fade>
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
