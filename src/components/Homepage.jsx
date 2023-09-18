import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import { createClient } from "contentful";

const Homepage = ({ recipes, setRecipes, searchBar }) => {
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
    } else {
      const filterItem = entryItems.items.filter((item) => {
        return item.fields.category === searchBar;
      });

      setRecipes(Array.isArray(filterItem.items) ? filterItem.items : []);
      console.log(filterItem);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, [searchBar]);

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
