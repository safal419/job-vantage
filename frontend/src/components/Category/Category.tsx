import React from "react";
import "./style.css";

const categories = [
  { name: "Design", logo: "https://via.placeholder.com/50", jobs: 150 },
  { name: "Sales", logo: "https://via.placeholder.com/50", jobs: 80 },
  { name: "Marketing", logo: "https://via.placeholder.com/50", jobs: 120 },
  { name: "Finance", logo: "https://via.placeholder.com/50", jobs: 100 },
  { name: "Technology", logo: "https://via.placeholder.com/50", jobs: 150 },
  { name: "Engineering", logo: "https://via.placeholder.com/50", jobs: 80 },
  { name: "Business", logo: "https://via.placeholder.com/50", jobs: 120 },
  { name: "Human Resource", logo: "https://via.placeholder.com/50", jobs: 100 },
  { name: "Business", logo: "https://via.placeholder.com/50", jobs: 120 },
  { name: "Human Resource", logo: "https://via.placeholder.com/50", jobs: 100 },
];

const JobCategories = () => {
  return (
    <div className="grid-container">
      {categories.map((category, index) => (
        <div className="category" key={index}>
          <img
            src={category.logo}
            alt={category.name}
            className="category-logo"
          />
          <div className="category-details">
            <h3>{category.name}</h3>
            <p>{category.jobs} available jobs</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCategories;
