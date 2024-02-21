import React from "react";
import "./style.css";
import JobCategories from "@/components/Category/Category";
import Image from "next/image";

const Homepage = () => {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="text">
            <h1>
              Discover More <br />
              than{" "}
              <span style={{ color: "blue" }}>
                100+ <br /> Jobs
              </span>{" "}
              <br />
            </h1>
            <img
              className="line"
              src="/assets/line.png"
              alt="JobVantage"
              width={450}
              height={150}
            />
            <p>
              Great platform for the job seeker and freelancers who are seeking
              for new career heights and passionate about startups.
            </p>
          </div>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
            <button type="submit" className="search-button">
              Search Jobs
            </button>
          </div>
        </div>
        {/* <div className="image">
          <img src="/assets/home.jpg" alt="" />
        </div> */}
      </div>
      <div className="categories">
        <h1 style={{ color: "white" }}>
          Explore by <span style={{ color: "blue" }}>Category</span>
        </h1>
        <JobCategories />
      </div>
    </>
  );
};

export default Homepage;
