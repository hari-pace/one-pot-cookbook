import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/meat">Meat</NavLink>
      <NavLink to="/fish">Fish</NavLink>
      <NavLink to="/vegan">Vegan</NavLink>
    </div>
  );
};

export default Navbar;
