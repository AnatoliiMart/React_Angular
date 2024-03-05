import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Products = createAsyncThunk(
  "allProducts",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios("https://fakestoreapi.com/products");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
