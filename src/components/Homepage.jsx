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
        {recipes &&
          recipes.map((item) => (
            <div key={item.fields.name} className="homepage-img-container">
              <Link to={`/${item.fields.category}`}>
                <img
                  src={item.fields.image.fields.file.url}
                  alt={item.fields.image.fields.file.title}
                />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Homepage;
