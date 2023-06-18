import { getStorage, saveStorage } from "./localStorage";
import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
} from "./actionTypes";
const initialState = {
  cart: getStorage(),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      state.cart = [
        ...state.cart,
        { ...action.payload.productData, qty: action.payload.qty },
      ];

      // console.log(state.cart);
      saveStorage(state.cart);

      return {
        ...state,
        cart: state.cart,
      };

    case REMOVE_FROM_CART:
      state.cart = state.cart.filter((p) => p.id !== action.payload);

      console.log(state.cart);
      saveStorage(state.cart);
      return {
        ...state,
        cart: state.cart,
      };

    case INCREMENT:
      state.cart = state.cart.map((p) =>
        p.id === action.payload ? { ...p, qty: p.qty + 1 } : p
      );
      saveStorage(state.cart);

      return {
        ...state,
        cart: state.cart,
      };

    case DECREMENT:
      state.cart = state.cart.map((p) =>
        p.id === action.payload ? { ...p, qty: p.qty - 1 } : p
      );
      saveStorage(state.cart);

      return {
        ...state,
        cart: state.cart,
      };
    case CLEAR_CART:
      saveStorage([]);
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
