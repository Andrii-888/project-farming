import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../constants";

const initialState = {
  sale: 0,
  isLoading: false,
  error: null,
  status: "idle",
};

export const saleOrder = createAsyncThunk("cart/saleOrder", async (data) => {
  const res = await axios.post(`${BASE_URL}/sale/send`, data);

  return await res.data;
});

export const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(saleOrder.pending, (state) => {
    //   state.status = "pending";
    // });
    // builder.addCase(saleOrder.fulfilled, (state) => {
    //   state.status = "success";
    // });
    // builder.addCase(saleOrder.rejected, (state, action) => {
    //   state.error = action.error.message;
    //   state.status = "error";
    // });
   
  },
});
export default saleSlice.reducer;
export const { addSale } = saleSlice.actions;
