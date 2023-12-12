import { configureStore } from "@reduxjs/toolkit";
// import categoriesSlice, {
//   fetchCategories,
// } from "./features/categories/categoriesSlice";
// import productsSlice, {
//   fetchProducts,
// } from "./features/products/productsSlice";
// import cartSlice from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    // categories: categoriesSlice,
    // products: productsSlice,
    // cart: cartSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

// store.dispatch(fetchCategories());
// store.dispatch(fetchProducts());
