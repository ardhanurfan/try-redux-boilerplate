import { combineReducers } from "redux";
import { setProductReducer, selectProductReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

export const reducers = combineReducers({
  products: setProductReducer,
  selectedProduct: selectProductReducer,
  cart: cartReducer,
});
