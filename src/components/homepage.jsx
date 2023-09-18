import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <img src="public\meat2-pot.png" alt="" />
        <h1 className="homepage-heading">One-pot Recipes</h1>
      </div>
      <div className="homepage-container">
        <div className="homepage-img-container">
          <Link className="homepage-link" to="/meat">
            <img
              className="homepage-img"
              src="public\meat-pot.png"
              alt="meat-img"
            />
            <h2>Meat recipes</h2>
          </Link>
        </div>
        <div className="homepage-img-container">
          <Link className="homepage-link" to="/fish">
            <img
              className="homepage-img"
              src="public\fish-pot.png"
              alt="fish-img"
            />
            <h2>Fish recipes</h2>
          </Link>
        </div>
        <div className="homepage-img-container">
          <Link className="homepage-link" to="/vegan">
            <img
              className="homepage-img"
              src="public/veggie-pot.png"
              alt="vegan-img"
            />
            <h2>Vegan recipes</h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
