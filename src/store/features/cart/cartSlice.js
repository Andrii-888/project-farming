import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../constants";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

// export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
//   const res = await axios(`${BASE_URL}/categories/all`);
//   const data = await res.data;
//   return data;
// });

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.products.push(action.payload);
    },
    removeFromCart(state, action) {
      state.products.filter((product) => product.id !== action.payload);
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(fetchCategories.pending, (state) => {
  //       state.isLoading = true;
  //     });
  //     builder.addCase(fetchCategories.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.data = action.payload;
  //     });
  //     builder.addCase(fetchCategories.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.error.message;
  //     });
  //   },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectCartProducts = (state) => state.cart.products;

export const selectProductInCartById = createSelector(
  selectCartProducts,
  (_, productId) => productId,
  (products, productId) =>
    !!products.find((product) => product.id === productId)
);
