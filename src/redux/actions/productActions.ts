import axios from "axios";
import { Product, ProductActionTypes } from "../constants/product-types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { Action } from "redux";

export const fetchProducts = (): ThunkAction<
  void,
  RootState,
  undefined,
  Action<string>
> => {
  return async (dispatch) => {
    const res = await axios.get("https://fakestoreapi.com/products");
    dispatch({
      type: ProductActionTypes.FETCH_PRODUCTS,
      payload: res.data,
    });
  };
};

export const setProducts = (products: Product[]) => {
  return {
    type: ProductActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product: Product) => {
  return {
    type: ProductActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeProduct = () => {
  return {
    type: ProductActionTypes.REMOVE_SELECTED_PRODUCT,
    payload: null,
  };
};
