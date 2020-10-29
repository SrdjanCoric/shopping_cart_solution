import { combineReducers } from "redux";
import { products } from "./products";
import { cart } from "./cart";
import { loading } from "./loading";

export const rootReducer = combineReducers({
  products,
  cart,
  loading,
});
