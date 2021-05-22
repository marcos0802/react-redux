import { combineReducers } from "redux";
import { productReducer, selectedRroductReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedRroductReducer,
});

export default reducers;
