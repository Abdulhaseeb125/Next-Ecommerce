import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "Best Gaming Phone",
      price: 200,
      quantity: 3,
    },
  ],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
