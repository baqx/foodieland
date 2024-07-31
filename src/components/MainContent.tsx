import React from 'react';
import '../styles/MainContent.css';

const MainContent: React.FC = () => {
  return (
    <main className="main-content">
      <section className="main-content-section">
        <div>
          <img src="hero-image-url" alt="Spicy delicious chicken wings" />
        </div>
        <div>
          <h1>Spicy delicious chicken wings</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="tags">
            <span>30 minutes</span>
            <span>15 ingredients</span>
            <span>3 steps</span>
          </div>
          <p className="author">Julie Jurkis - November 2020</p>
          <button>View Recipe</button>
        </div>
      </section>

    </main>
  );
};

export default MainContent;
