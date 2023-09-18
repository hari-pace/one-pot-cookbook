import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src="public\meat2-pot.png" alt="" />
        <h4>One-Pot Recipe</h4>
      </div>
      <div className="navlink">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/meat">Meat</NavLink>
        <NavLink to="/fish">Fish</NavLink>
        <NavLink to="/vegan">Vegan</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
