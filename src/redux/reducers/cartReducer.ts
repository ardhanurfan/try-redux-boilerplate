import { Reducer } from "react";
import { Cart, CartActionTypes } from "../constants/cart-type";
import { Product } from "../constants/product-types";

export const cartReducer: Reducer<
  Cart[],
  { type: CartActionTypes; payload: Product }
> = (state = [], { type, payload }) => {
  switch (type) {
    case CartActionTypes.ADD_TO_CART:
      var productIndex = state.findIndex((val) => val.id === payload.id);
      if (productIndex !== -1) {
        state[productIndex].amount++;
      } else {
        state = [...state, { ...payload, amount: 1 }];
      }
      return [...state];
    case CartActionTypes.REMOVE_FROM_CART:
      var productIndex = state.findIndex((val) => val.id === payload.id);
      if (state[productIndex].amount > 1) {
        state[productIndex].amount--;
      } else {
        state = state.filter((val) => val.id !== payload.id);
      }
      return [...state];
    default:
      return state;
  }
};
