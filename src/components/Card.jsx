import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";

export default function CardInter({ recipe }) {
  return (
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
        description={`Recipe: ${recipe.fields.name}`}
      />
    </Card>
  );
}
