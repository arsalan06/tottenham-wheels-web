import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  wheelsStock: [],
  tyresStock: [],
  usersArray: [],
  usersLogs: [],
  categoriesList: [],
};

const productStockSlice = createSlice({
  name: "productStockSlice",
  initialState,
  reducers: {
    addCategoriesList(state, action) {
      state.categoriesList = action.payload;
    },
    addWheelsStock(state, action) {
      state.wheelsStock = action.payload;
    },
    addTyresStock(state, action) {
      state.tyresStock = action.payload;
    },
    addUsersList(state, action) {
      state.usersArray = action.payload;
    },
    addUsersLogs(state, action) {
      state.usersLogs = action.payload;
    },
  },
});
export const {
  addWheelsStock,
  addUsersList,
  addTyresStock,
  addUsersLogs,
  addCategoriesList,
} = productStockSlice.actions;
export default productStockSlice.reducer;
