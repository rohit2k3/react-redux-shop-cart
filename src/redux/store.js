import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cart.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});