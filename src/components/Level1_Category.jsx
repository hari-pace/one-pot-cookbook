import React from "react";
import "./Level1_Category.css";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const Level1_Category = ({ recipes }) => {
  const navigate = useNavigate();

  const { category } = useParams();

  return (
    <>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} recipes</h1>
      {recipes.map((recipe) =>
        recipe.fields.category === category ? (
          <div className="category-container" key={recipe.sys.id}>
            <Link className="category-link" to={recipe.fields.urlname}>
              <h1> {recipe.fields.name} </h1>
              <img
                className="category-img"
                src={recipe.fields.image.fields.file.url}
                alt={recipe.fields.recipeName}
              />
            </Link>
          </div>
        ) : (
          ""
        )
      )}
      <button onClick={() => navigate("/")}>Back to home</button>
    </>
  );
};

export default Level1_Category;
