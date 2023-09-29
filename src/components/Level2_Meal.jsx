import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Level2_meal.css";

const Level2_Meal = ({ recipes }) => {
  const navigate = useNavigate();

  const { food } = useParams();

  //Get category for deleting
  let category_recipe;
  function callCategory() {
    recipes.find((recipe) => {
      if (recipe.urlname === food) {
        category_recipe = recipe.category;
      }
    });
  }
  function deleteItem() {
    callCategory();
    alert("OH oh you need permision! :)");
    const userInput = prompt("Enter the password: ");
    if (userInput === "1234") {
      fetchData(category_recipe);
      alert("Your page is deleted go back home");
    } else {
      alert("Ops! seems that you are not the one");
    }
  }

  const fetchData = async (category) => {
    const URL_to_delete =
      "https://cookbook-backend-n5w0.onrender.com/cookbook/" +
      category +
      "/" +
      food;
    await fetch(URL_to_delete, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: 1 }),
    })
      .then((response) => {
        if (response.ok) {
          window.location = window.location.href
            .replace(/\/[^\/]*$/, "")
            .replace(/\/[^\/]*$/, "");
        } else {
          throw new Error("Error deleting item");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
                  <ul className="ingredient-container" key={recipe.id}>
                    {recipe.ingredients.split(";").map((ingredient) => (
                      <li>{ingredient}</li>
                    ))}
                  </ul>
                }
              </div>
            </div>
            <div className="meal-instructions">
              <h2>Instructions</h2>
              {recipe.instructions}{" "}
            </div>
          </div>
        ) : null
      )}
      <button
        className="btn-back"
        onClick={() => {
          deleteItem();
        }}
      >
        Delete Recipe
      </button>
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
