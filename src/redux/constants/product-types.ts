export interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  price: number;
  description: string;
}

export enum ProductActionTypes {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  SET_PRODUCTS = "SET_PRODUCTS",
  SELECTED_PRODUCT = "SELECTED_PRODUCT",
  REMOVE_SELECTED_PRODUCT = "REMOVE_SELECTED_PRODUCT",
}

// export interface SetProducts extends Action {
//   payload: Product[];
//   type: typeof ProductActionTypes.SET_PRODUCTS;
// }

// export interface SelectedProduct extends Action {
//   payload: Product;
//   type: typeof ProductActionTypes.SELECTED_PRODUCT;
// }

// export interface RemoveProduct extends Action {
//   type: typeof ProductActionTypes.REMOVE_SELECTED_PRODUCT;
// }

// export type ProductActions = SetProducts | SelectedProduct | RemoveProduct;
