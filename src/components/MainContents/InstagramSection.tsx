import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import "../../styles/MainContents/InstagramSection.css";
import { FaInstagram } from "react-icons/fa";
const InstagramSection: React.FC = () => {
  const postIds = ["CUbHfhpswxt", "CUbHfhpswxt", "CUbHfhpswxt", "CUbHfhpswxt"];

  return (
    <div className="instagram-container-wrapper">
      <section className="instagram-container">
        <h1 className="title">Check out @foodieland on Instagram</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
          minim
        </p>
        <div className="instagram-grid">
          {postIds.map((id, index) => (
            <div key={index} className="instagram-item">
              <InstagramEmbed
                url={`https://www.instagram.com/p/${id}/`}
                width={328}
                captioned
              />
            </div>
          ))}
        </div>
        <div className="button-container">
          <button className="instagram-button">
            <span>Visit Our Instagram</span>
            <FaInstagram className="instagram-icon" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default InstagramSection;
