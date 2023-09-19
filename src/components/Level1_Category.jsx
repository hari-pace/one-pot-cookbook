import React from "react";
import "./Level1_Category.css";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

import CardInter from "./Card";

const Level1_Category = ({ recipes }) => {
  const navigate = useNavigate();

  const { category } = useParams();

  return (
    <div className="level1-wrapper">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} recipes</h1>
      <div className="container-level1">
        {recipes.map((recipe) =>
          recipe.fields.category === category ? (
            <div className="category-container" key={recipe.sys.id}>
              <Link to={recipe.fields.urlname}>
                {<CardInter recipe={recipe} />}
              </Link>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <button className="btn-back" onClick={() => navigate("/")}>
        Back to home
      </button>
    </div>
  );
};

export default Level1_Category;
