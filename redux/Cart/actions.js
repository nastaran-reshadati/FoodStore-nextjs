import { ADD_TO_CART, CLEAR_CART, DECREMENT, INCREMENT, REMOVE_FROM_CART } from "./actionTypes";

export const addToCart = (productData, qty) => {
  return {
    type: ADD_TO_CART,
    payload: { productData, qty },
  };
};

export const IncrementProduct = (productDataId) => {
  return {
    type: INCREMENT,
    payload: productDataId,
  };
};
export const DecrementProduct = (productDataId) => {
  return {
    type: DECREMENT,
    payload: productDataId,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
