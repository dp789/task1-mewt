import { useData } from "../context/context";
import Cart from "./Cart";
import SavedList from "./SavedList";
import { Link } from "react-router-dom";

const CartList = () => {
  const { state } = useData();

  const getBill = () => {
    const val = state.cartlist.reduce(
      (acc, cur) => acc + cur.quantity * cur.price,
      0
    );
    return val;
  };

  return (
    <>
    <div >
    <Link to="/"><h1 style={{textAlign:"center",color:"#34D399"}}>Home</h1></Link>
      <h2 style={{textAlign:"center"}}>Carts</h2>
      {state.cartlist.length > 0 && (
        <fieldset style={{ textAlign: "center" }}>
          <h3>Total Amount : {getBill()}</h3>
          <h4>Total Items : {state.cartlist.length}</h4>
        </fieldset>
      )}
    </div>
      
      <div
        style={{
          display: "flex",
          textAlign: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        {state.cartlist.map((item) => {
          return <Cart item={item} key={item._id} />;
        })}
      </div>
      <SavedList />
    </>
  );
};

export default CartList;
