import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import HeroSection from "./components/MainContents/HeroSection";

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <main>
        <HeroSection />
      </main>
      
    </div>
  );
};

export default App;
