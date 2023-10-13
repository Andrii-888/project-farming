import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../constants";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios(`${BASE_URL}/products/all`);
    const data = await res.data;
    return data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
export const selectAllProducts = (state) =>
  state.products.data;
export const selectSaleProductsDashboard = (state) =>
  state.products.data.filter((product) => product.discont_price).slice(0, 4);
export const selectSaleProducts = (state) =>
  state.products.data.filter((product) => product.discont_price);
