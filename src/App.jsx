import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import "./App.css";
import Level2_Meal from "./components/Level2_Meal";
import Navbar from "./components/Navbar";
import Level1_Category from "./components/Level1_Category";
import Layout from "./components/Layout";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchBar, setSearchBar] = useState("");

  return (
    <>
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <Layout
                recipes={recipes}
                searchBar={searchBar}
                setSearchBar={setSearchBar}
              />
            }
          >
            <Route
              index
              element={
                <Homepage
                  recipes={recipes}
                  setRecipes={setRecipes}
                  searchBar={searchBar}
                />
              }
            />
            <Route
              path="/:category"
              element={<Level1_Category recipes={recipes} />}
            />
            <Route
              path="/:category/:food"
              element={<Level2_Meal recipes={recipes} />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
