import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../thunks/productsThunk";

const initialState = {
  products: [],
  loading: "idle",
  error: null,
};
export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(Products.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(Products.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.products = action.payload;
      })
      .addCase(Products.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.payload;
      });
  },
});

export default ProductsSlice.reducer;
