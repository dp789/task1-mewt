import { createContext, useContext, useReducer } from "react";
import { Data } from "../utility/Data";

const ProductContext = createContext();

export const useData = () => {
  return useContext(ProductContext);
};

const productList = Data.productData;
const cartlist = [];
const savedList = [];

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    cartlist,
    savedList,
    productList
  });

  const addToCart = (details) => {
    dispatch({ type: "ADD_TO_CART", payload: { item: details } });
  };

  const increment = (details) => {
    console.log(details);
    dispatch({ type: "INCREMENT", payload: { item: details } });
  };

  const decrement = (details) => {
    dispatch({ type: "DECREMENT", payload: { item: details } });
  };

  const addToSaved = (details) => {
    dispatch({ type: "MOVE_TO_SAVEDLIST", payload: { item: details } });
    dispatch({ type: "REMOVE_FROM_CART", payload: { item: details } });
  };

  const removeItem = (details) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { item: details } });
  };

  const removeSaved = (details) => {
    dispatch({ type: "REMOVE_FROM_SAVED", payload: { item: details } });
  };

  return (
    <ProductContext.Provider
      value={{
        state,
        addToCart,
        removeItem,
        removeSaved,
        addToSaved,
        increment,
        decrement,
        dispatch
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action.payload);
      const found = state.cartlist.find(
        (item) => item._id === action.payload._id
      );
      if (!found) {
        return {
          ...state,
          cartlist: state.cartlist.concat(action.payload.item)
        };
      }
      return state;

    case "REMOVE_FROM_CART":
      console.log(action.payload.item);
      return {
        ...state,
        cartlist: state.cartlist.filter(
          (item) => item._id !== action.payload.item._id
        )
      };

    case "REMOVE_FROM_SAVED":
      console.log(action.payload.item);
      return {
        ...state,
        savedList: state.savedList.filter(
          (item) => item._id !== action.payload.item._id
        )
      };

    case "MOVE_TO_SAVEDLIST":
      console.log(action.payload);
      const find = state.savedList.find(
        (item) => item._id === action.payload._id
      );
      if (!find) {
        return {
          ...state,
          savedList: state.savedList.concat(action.payload.item)
        };
      }
      return state;

    case "INCREMENT":
      console.log(action.payload);
      return {
        ...state,
        cartlist: state.cartlist.map((item) =>
          item._id === action.payload.item._id
            ? { ...item, quantity: action.payload.item.quantity + 1 }
            : item
        )
      };

    case "DECREMENT":
      return {
        ...state,
        cartlist: state.cartlist.map((item) =>
          item._id === action.payload.item._id
            ? { ...item, quantity: action.payload.item.quantity - 1 }
            : item
        )
      };

    default:
      return state;
  }
};
