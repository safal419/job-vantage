import React from "react";
import "./style.css";

const categories = [
  { name: "Design", logo: "/software_logo.png", jobs: 150 },
  { name: "Sales", logo: "/design_logo.png", jobs: 80 },
  { name: "Marketing", logo: "/data_logo.png", jobs: 120 },
  { name: "Finance", logo: "/marketing_logo.png", jobs: 100 },
  { name: "Technology", logo: "/software_logo.png", jobs: 150 },
  { name: "Engineering", logo: "/design_logo.png", jobs: 80 },
  { name: "Business", logo: "/data_logo.png", jobs: 120 },
  { name: "Human Resource", logo: "/marketing_logo.png", jobs: 100 },
  { name: "Business", logo: "/data_logo.png", jobs: 120 },
  { name: "Human Resource", logo: "/marketing_logo.png", jobs: 100 },
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
