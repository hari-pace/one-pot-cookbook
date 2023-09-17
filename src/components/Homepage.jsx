import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <h1 className="homepage-heading">One-pot Recipes</h1>
      <div className="homepage-container">
        <div className="homepage-img-container">
          <Link to="/meat">
            <h2>Meat recipes</h2>
            <img className="homepage-img" src="" alt="meat-img" />
          </Link>
        </div>
        <div className="homepage-img-container">
          <Link to="/fish">
            <h2>Fish recipes</h2>
            <img className="homepage-img" src="" alt="fish-img" />
          </Link>
        </div>
        <div className="homepage-img-container">
          <Link to="/vegan">
            <h2>Vegan recipes</h2>
            <img className="homepage-img" src="" alt="vegan-img" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
