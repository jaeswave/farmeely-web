import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { usePost } from "../../hooks";
import Urls from "../../services/urls";

export const createCustomerAccount = createAsyncThunk(
  "createCustomerAccount",
  async (data) => {
    try {
      const response = await usePost(Urls.userSignUp, data);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customer: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle Create Account
    builder.addCase(createCustomerAccount.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(createCustomerAccount.fulfilled, (state, action) => {
      state.isLoading = false;
      state.customer = action.payload;
    });
    builder.addCase(createCustomerAccount.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default customerSlice.reducer;
