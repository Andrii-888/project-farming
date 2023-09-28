import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice, {
  fetchCategories,
} from "./features/categories/categoriesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

store.dispatch(fetchCategories());
