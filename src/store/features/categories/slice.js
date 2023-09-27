// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

// export const categoriesSlice = createSlice({
//   name: "categories",
//   initialState,
//   reducers: {
//     // increment: (state) => {
//     //   state.value += 1
//     // },
//     // decrement: (state) => {
//     //   state.value -= 1
//     // },
//     // incrementByAmount: (state, action) => {
//     //   state.value += action.payload
//     // },
//   },
// });

// export const {} = categoriesSlice.actions;

// export default categoriesSlice.reducer;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  //   tagTypes: ["Post"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories/all",
    }),
  }),
});
export const { useGetCategoriesQuery } = categoriesApi;
