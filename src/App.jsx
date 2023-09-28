import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import "./App.css";
import Level2_Meal from "./components/Level2_Meal";
import Navbar from "./components/Navbar";
import Level1_Category from "./components/Level1_Category";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

function App() {
  const [recipenav, setRecipenav] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [searchBar, setSearchBar] = useState("");
  const [recipesSearch, setRecipesSearch] = useState([]);
  const [recipeFetchToggle, setRecipeFetchToggle] = useState(false);

  return (
    <>
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <Layout
                recipenav={recipenav}
                recipesSearch={recipesSearch}
                searchBar={searchBar}
                setSearchBar={setSearchBar}
              />
            }
          >
            <Route
              index
              element={
                <Homepage
                  setRecipenav={setRecipenav}
                  recipes={recipes}
                  setRecipes={setRecipes}
                  searchBar={searchBar}
                  setRecipesSearch={setRecipesSearch}
                  recipeFetchToggle={recipeFetchToggle}
                  setRecipeFetchToggle={setRecipeFetchToggle}
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

      <Footer />
    </>
  );
}

export default App;
