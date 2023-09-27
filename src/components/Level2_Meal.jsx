import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Level2_meal.css";

const Level2_Meal = ({ recipes }) => {
  const navigate = useNavigate();

  const { food } = useParams();

  console.log(recipes);

  return (
    <div className="meal-wrapper">
      {recipes.map((recipe) =>
        recipe.urlname === food ? (
          <div className="meal-container" key={recipe.id}>
            <h1> {recipe.name} </h1>
            <div className="ingredients-wrapper">
              <img
                className="meal-img"
                src={recipe.image}
                alt={recipe.urlname}
              />
              <div className="meal-ingredients">
                <h2>Ingredients</h2>

                {
                  <ul key={recipe.id}>
                    <li className="list">{recipe.ingredients}</li>
                  </ul>
                }
                {/* {recipe.ingredients.map((ingredient, index) => (
                  <ul key={index}>
                    <li className="list">{ingredient}</li>
                  </ul>
                ))} */}
              </div>
            </div>
            <div className="meal-instructions">
              <h2>Instructions</h2>
              {recipe.instructions}{" "}
            </div>
          </div>
        ) : null
      )}
      <button className="btn-back" onClick={() => navigate(-1)}>
        Back to previous page
      </button>
      <button className="btn-back" onClick={() => navigate("/")}>
        Back to home
      </button>
    </div>
  );
};

export default Level2_Meal;
