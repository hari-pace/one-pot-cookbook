import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import { createClient } from "contentful";
import Banner_top from "./Banner_top";
import Banner_bottom from "./Banner_bottom";

const Homepage = ({
  setRecipenav,
  recipes,
  setRecipes,
  searchBar,
  setRecipesSearch,
}) => {
  // Setting evns
  const API_space = import.meta.env.VITE_API_SPACE;
  const API_access_token = import.meta.env.VITE_API_ACCESS_TOKEN;

  const client = createClient({
    space: API_space,
    accessToken: API_access_token,
  });

  //Fetch data
  async function fetchRecipes() {
    const entryItems = await client.getEntries();

    if (searchBar === "") {
      setRecipes(entryItems.items);
      setRecipenav(entryItems.items);
      setRecipesSearch([]);
    } else {
      const filterItem = entryItems.items.filter((item) => {
        return item.fields.category === searchBar;
      });
      setRecipenav(entryItems.items);
      setRecipesSearch(filterItem);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, [searchBar]);

  return (
    <div>
      <div className="homepage">
        <img src="public\fish-pot.png" alt="" />
        <h1 className="homepage-heading">One-pot Recipes</h1>
      </div>
      <Banner_top />
      <div className="homepage-container">
        <div className="homepage-img-container">
          <Link className="homepage-link" to="/meat">
            <h2>Meat recipes</h2>
            <img
              className="homepage-img"
              src="public\meat-pot.png"
              alt="meat-img"
            />
          </Link>
        </div>
        <div className="homepage-img-container">
          <Link className="homepage-link" to="/fish">
            <h2>Fish recipes</h2>
            <img
              className="homepage-img"
              src="public\meat2-pot.png"
              alt="fish-img"
            />
          </Link>
        </div>
        <div className="homepage-img-container">
          <Link className="homepage-link" to="/vegan">
            <h2>Vegan recipes</h2>
            <img
              className="homepage-img"
              src="public\veggie-pot.png"
              alt="vegan-img"
            />
          </Link>
        </div>
      </div>
      <Banner_bottom />
    </div>
  );
};

export default Homepage;
