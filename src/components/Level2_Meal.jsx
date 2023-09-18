import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Level2_meal.css";

const Level2_Meal = ({ recipes }) => {
  const navigate = useNavigate();

  const { food } = useParams();

  console.log(recipes);

  return (
    <>
      {recipes.map((recipe) =>
        recipe.fields.urlname === food ? (
          <div className="meal-container" key={recipe.sys.id}>
            <h1> {recipe.fields.name} </h1>
            <div className="meal-wrapper">
              <img
                className="meal-img"
                src={recipe.fields.image.fields.file.url}
                alt={recipe.fields.recipeName}
              />
              <div className="meal-ingredients">
                <h2>Ingredients</h2>
                {recipe.fields.ingredients.map((ingredient, index) => (
                  <ul key={index}>
                    <li className="list">{ingredient}</li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="meal-instructions">
              <h2>Instructions</h2>
              {recipe.fields.instructions}{" "}
            </div>
          </div>
        ) : null
      )}
      <button onClick={() => navigate(-1)}>Back to previous page</button>
      <button onClick={() => navigate("/")}>Back to home</button>
    </>
  );
};

export default Level2_Meal;
