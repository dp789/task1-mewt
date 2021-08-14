import { useData } from "../../context/context";
import ProductCard from "./ProductCard";

const Card = () => {
  const { state } = useData();
  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        {/* mapping items to render on screen */}
        {state.productList.map((item) => {
          return <ProductCard item={item} key={item._id} />;
         })}
      </div>
    </>
  );
};

export default Card;
