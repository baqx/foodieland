import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/MainContents/HeroSectionSlider.css";

import { Pagination, Navigation } from "swiper/modules";
import HeroSection from "./HeroSection";

const HeroSectionSlider: React.FC = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="hero-section-slider"
    >
      <SwiperSlide>
        <HeroSection
          title="Spicy delicious chicken wings"
          description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
          time="30 Minutes"
          category="Chicken"
          authorDate="15 March 2022"
          authorName="John Smith"
          imageSrc="/images/hero.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSection
          title="Savory Garlic Parmesan Wings"
          description="Juicy wings tossed in a creamy garlic parmesan sauce that will make your taste buds dance."
          time="45 Minutes"
          category="Appetizers"
          authorDate="22 June 2023"
          authorName="Jane Doe"
          imageSrc="/images/recipes/pancake.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSection
          title="Big and Juicy Wagyu Beef Cheeseburger"
          description="Big and Juicy Wagyu Beef Cheeseburger"
          time="30 Minutes"
          category="Snack"
          authorDate="15 March 2022"
          authorName="John Smith"
          imageSrc="/images/morerecipes/wagyu-beef.png"
        />
      </SwiperSlide>

      <SwiperSlide>
        <HeroSection
          title="Fresh Lime Roasted Salmon with Ginger Sauce"
          description="Fresh Lime Roasted Salmon with Ginger Sauce"
          time="30 Minutes"
          category="Healthy"
          authorDate="15 March 2022"
          authorName="John Smith"
          imageSrc="/images/recipes/salmon.png"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSectionSlider;
