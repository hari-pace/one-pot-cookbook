import React from "react";
import "./Level1_Category.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

import CardInter from "./Card";

const Level1_Category = ({ recipes, setRecipeFetchToggle }) => {
  const [newName, setNewName] = useState("");
  const [newURLName, setNewURLName] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [newInstructions, setNewInstructions] = useState("");

  const navigate = useNavigate();

  const { category } = useParams();

  const addNewRecipe = async () => {
    const response = await fetch(
      "https://cookbook-backend-n5w0.onrender.com/cookbook",
      {
        method: "POST",
        body: JSON.stringify({
          name: newName,
          image: newImage,
          category: newCategory.toLowerCase(),
          ingredients: newIngredients,
          instructions: newInstructions,
          urlname: newURLName.toLowerCase(),
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    )
      .then((response) => {
        if (response.ok) {
          window.location = window.location.href
            .replace(/\/[^\/]*$/, "")
            .replace(/\/[^\/]*$/, "");
        } else {
          throw new Error("Error post item");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    setNewName("");
    setNewURLName("");
    setNewImage("");
    setNewIngredients("");
    setNewInstructions("");
    setRecipeFetchToggle(true);
  };

  // console.log(recipes);
  return (
    <div className="level1-wrapper">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} recipes</h1>
      <div className="container-level1">
        {recipes.map((recipe) =>
          recipe.category === category ? (
            <div className="category-container" key={recipe.id}>
              <Link to={recipe.urlname}>{<CardInter recipe={recipe} />}</Link>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <div className="input-new-recipe">
        <h2>Add new recipe</h2>

        <label htmlFor="name">Recipe name:</label>
        <input
          id="name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Add recipe name here..."
        />
        <label htmlFor="url-name">URL name:</label>
        <input
          id="url-name"
          value={newURLName}
          onChange={(e) => setNewURLName(e.target.value)}
          placeholder="Add recipe URL name here (recipe name separated by '-' instead of spaces)..."
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Add category..."
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
          placeholder="Add image URL here..."
        />
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          value={newIngredients}
          onChange={(e) => setNewIngredients(e.target.value)}
          placeholder="Add ingredients list here (separate each ingredient with ';')..."
        />
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          id="instructions"
          value={newInstructions}
          onChange={(e) => setNewInstructions(e.target.value)}
          placeholder="Add instructions here..."
        />
        <button onClick={addNewRecipe}>Submit</button>
      </div>

      <button className="btn-back" onClick={() => navigate("/")}>
        Back to home
      </button>
    </div>
  );
};

export default Level1_Category;
