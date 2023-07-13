import React, { createContext, useContext, useEffect, useReducer } from "react";
import "../CSSFile/shoppingCart.css";
import products from "../JSONProductData/productData";
import ContextCart from "../Context/ContextCart";
import reducer from "../Context/reducer";

// create a context
export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 2000,
  totalItems: 0,
  quantity: 1,
};

const ShoppingCart = () => {
  
  const [state, dispatch] = useReducer(reducer, initialState);
    
  
  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  useEffect(()=>{
    dispatch({ type: "GET_TOTAL"});
  
  }, [state.item]);

 
  


  return (
    <>
      <CartContext.Provider
        value={{ ...state,clearCart, removeItem, increment, decrement }}>
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};

/*/*custom Hook
export const useGlobalContext = () => {
  return useContext(CartContext);
};*/

export default ShoppingCart;