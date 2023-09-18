import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import filterDuplicate from "../components/utils/Filterduplicate";

const Navbar = ({ recipes, searchBar, setSearchBar }) => {
  const [value, setValue] = useState("");

  //Items will be filtered redundant category on the object
  const filteredItems = filterDuplicate({ recipes });
  const handleSearchBar = (e) => {
    e.preventDefault();
    setSearchBar(e.target.value);
    setValue("");
  };

  return (
    <div className="container-navbar-searchbar">
      <div className="container-navbar">
        <NavLink to="/">Home</NavLink>
        {filteredItems &&
          filteredItems.map((item) => (
            <div key={item.fields.category}>
              <NavLink to={`/${item.fields.category}`}>
                {item.fields.category}
              </NavLink>
            </div>
          ))}
      </div>
      <div className="container-searchbar-btn">
        <form>
          <input
            id="searchFiled"
            placeholder="Search by category"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
          <button id="searchBtn" onClick={handleSearchBar} value={value}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
