import axios from "@/Axios";
import { createSlice, current } from "@reduxjs/toolkit";
import { useSession } from "next-auth/react";

type Products = {
  products: Array<object>,
  product_id_set: Array<number>
};

const initialState: Products = {
  products: [],
  product_id_set: []
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.product_id_set.includes(action.payload.products.product_id)) return;
      state.products.push(action.payload.products);
      state.product_id_set.push(action.payload.products.product_id);
    },
    addToCartWithButton: (state, action) => {
      if (state.product_id_set.includes(action.payload.product.product_id)) return;
      state.products.push(action.payload.product);
      state.product_id_set.push(action.payload.product.product_id);
      axios.post("/api/uploadToCart", JSON.stringify({
        product_id: action.payload.product.product_id,
        user_id: action.payload.userID,
        quantity: 1
      }))
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, addToCartWithButton } = cartSlice.actions;

