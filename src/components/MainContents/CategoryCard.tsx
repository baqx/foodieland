import React from "react";
import "../../styles/MainContents/CategoryCard.css";

interface CategoryCardProps {
  icon: string;
  label: string;
  gradient: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  label,
  gradient,
}) => {
  return (
    <div className="category-card" style={{ background: gradient }}>
      <img src={icon} alt={label} className="category-icon" />
      <p className="category-label">{label}</p>
    </div>
  );
};

export default CategoryCard;
