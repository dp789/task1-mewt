import { Link, useLocation } from "react-router-dom";
import { useData } from "../../context/context";

const ProductCard = ({ item }) => {
  const {
    state,
    addToCart,
    increment,
    decrement,
    removeItem,
    addToSaved
  } = useData();
  const location = useLocation();

  const presentInCart = () => {
    return state.cartlist.find((it) => it._id === item._id);
  };

  const increaseQty = () => {
    increment(item);
  };

  const decreaseQty = () => {
    decrement(item);
  };

  const presentInSaved = () => {
    return state.savedList.find((it) => it._id === item._id);
  };

  const clickHandler = () => {
    item.quantity = 1;
    addToCart(item);
  };

  const deleteItem = () => {
    removeItem(item);
  };

  const savedItem = () => {
    addToSaved(item);
  };

  return (
    <div className="product-card" style={{ margin: "20px" }}>
      <div className="badge">{item.idealFor}</div>
      <div className="product-tumb">
        <img src={item.image} alt="" />
      </div>
      <div className="product-details">
        <span className="product-catagory">{item.brand}</span>
        <p>{item.name}</p>
        <div className="product-bottom-details">
          <div className="product-price">₹{item.price}</div>
          <div className="product-price">Size:{item.size}</div>
        </div>

        {!presentInCart() ? (
          <button onClick={clickHandler} className="btn-primary">
            Add to Cart
          </button>
        ) : (
          <div>
            {location.pathname === "/" && (
              <Link to="/cart">
                <button className="btn-primary">Go to Cart</button>
              </Link>
            )}
          </div>
        )}

        {location.pathname === "/cart" && (
          <>
            {presentInCart() ? (
              <>
                <button onClick={deleteItem} className="btn-primary">
                  Remove
                </button>
                <button onClick={increaseQty} className="btn-primary">
                  +
                </button>
                {item.quantity}
                <button onClick={decreaseQty} className="btn-primary">
                  -
                </button>

                <button onClick={savedItem} className="btn-primary">
                  Saved For Later
                </button>
              </>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
