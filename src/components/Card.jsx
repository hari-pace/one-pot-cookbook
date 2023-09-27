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
      cover={<img src={recipe.image} alt={recipe.name} />}
    >
      <Meta title={recipe.name} description={`Recipe: ${recipe.name}`} />
    </Card>
  );
}
