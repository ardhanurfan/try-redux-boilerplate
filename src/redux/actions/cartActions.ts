import { CartActionTypes } from "../constants/cart-type";
import { Product } from "../constants/product-types";

export const addToCart = (product: Product) => {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product: Product) => {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: product,
  };
};
