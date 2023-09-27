import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import filterDuplicate from "../components/utils/Filterduplicate";

const Navbar = ({ recipenav, setSearchBar }) => {
  const [value, setValue] = useState("");

  //Items will be filtered redundant category on the object
  const filteredItems = filterDuplicate({ recipenav });
  const handleSearchBar = (e) => {
    e.preventDefault();
    setSearchBar(e.target.value);
    setValue("");
  };

  return (
    <div className="container-navbar-searchbar">
      <div className="nav-logo">
        <img src="./fish-pot.png" alt="logo" />
        <h4>One-Pot Recipe</h4>
      </div>
      <div className="container-navbar">
        <NavLink
          className="nav-link"
          to="/"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "white",
                  background: "#fab005",
                }
              : { color: "white", background: "#47618f" }
          }
        >
          Home
        </NavLink>
        {filteredItems &&
          filteredItems.map((item) => (
            <div key={item.category}>
              <NavLink
                onClick={() => {
                  setSearchBar("");
                }}
                className="nav-link"
                to={`/${item.category}`}
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "white",
                        background: "#fab005",
                      }
                    : { color: "white", background: "#47618f" }
                }
              >
                {item.category}
              </NavLink>
            </div>
          ))}
      </div>
      <div className="container-searchbar-btn">
        <form>
          <input
            style={{
              padding: 10,
            }}
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
