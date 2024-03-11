import { Reducer } from "redux";
import { Product, ProductActionTypes } from "../constants/product-types";

export const setProductReducer: Reducer<
  Product[],
  { type: ProductActionTypes; payload: Product[] }
> = (state = [], { type, payload }) => {
  switch (type) {
    case ProductActionTypes.FETCH_PRODUCTS:
      return payload;
    case ProductActionTypes.SET_PRODUCTS:
      return payload;
    default:
      return state;
  }
};

export const selectProductReducer: Reducer<
  Product | null,
  { type: ProductActionTypes; payload: Product | null }
> = (state = null, { type, payload }) => {
  switch (type) {
    case ProductActionTypes.SELECTED_PRODUCT:
      return payload;
    case ProductActionTypes.REMOVE_SELECTED_PRODUCT:
      return payload;
    default:
      return state;
  }
};
