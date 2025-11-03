import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import addToCartSlice from "./slice/addToCartSlice";
import productStockSlice from "./slice/productStockSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  addToCart: addToCartSlice,
  productStock: productStockSlice,
});

export { rootPersistConfig, rootReducer };
