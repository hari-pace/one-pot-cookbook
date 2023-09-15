import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import "./App.css";
import Level2_Meal from "./components/Level2_Meal";
import Navbar from "./components/Navbar";
import Level1_Category from "./components/Level1_Category";

function App() {
  const [recipes, setRecipes] = useState([]);

  const API_space = import.meta.env.VITE_API_SPACE;
  const API_access_token = import.meta.env.VITE_API_ACCESS_TOKEN;

  const client = createClient({
    space: API_space,
    accessToken: API_access_token,
  });

  async function fetchRecipes() {
    const entryItems = await client.getEntries();
    setRecipes(entryItems.items);
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/:category"
          element={<Level1_Category recipes={recipes} />}
        />
        <Route
          path="/:category/:food"
          element={<Level2_Meal recipes={recipes} />}
        />
      </Routes>
    </>
  );
}

export default App;
