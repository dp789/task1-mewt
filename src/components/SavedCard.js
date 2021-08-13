import { Link, useLocation } from "react-router-dom";
import { useData } from "../context/context";

const SavedCard = ({ item }) => {
  const { state, addToCart, removeSaved } = useData();

  const presentInSaved = () => {
    return state.savedList.find((it) => it._id === item._id);
  };

  const clickHandler = () => {
    item.quantity = 1;
    addToCart(item);
    removeSaved(item);
  };

  const deletefromSaved = () => {
    removeSaved(item);
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
          <div className="product-price">${item.price}</div>
          <div className="product-price">Size:{item.size}</div>
        </div>

        {presentInSaved() ? (
          <>
            <button onClick={deletefromSaved} className="btn-primary">
              Remove from saved later
            </button>
            <button onClick={clickHandler} className="btn-primary">
              Move to Cart
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SavedCard;
