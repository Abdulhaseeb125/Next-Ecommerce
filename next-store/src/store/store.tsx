import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slices/CartSlice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default store;
