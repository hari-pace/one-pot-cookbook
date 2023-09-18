import React from "react";
import "./Level1_Category.css";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
const Level1_Category = ({ recipes }) => {
  const navigate = useNavigate();

  const { category } = useParams();

  return (
    <>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} recipes</h1>
      <div className="container-level1">
        {recipes.map((recipe) =>
          recipe.fields.category === category ? (
            <div className="category-container" key={recipe.sys.id}>
              <Link to={recipe.fields.urlname}>
                {
                  <Card
                    hoverable
                    style={{
                      width: 240,
                      margin: "3rem",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    cover={
                      <img
                        src={recipe.fields.image.fields.file.url}
                        alt={recipe.fields.recipeName}
                      />
                    }
                  >
                    <Meta
                      title={recipe.fields.name}
                      description={`Recepie: ${recipe.fields.name}`}
                    />
                  </Card>
                }
              </Link>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <button onClick={() => navigate("/")}>Back to home</button>
    </>
  );
};

export default Level1_Category;
