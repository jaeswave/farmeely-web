import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { usePatch, usePost } from "../../hooks";
import Urls from "../../services/urls";

export const startForgetPassword = createAsyncThunk(
  "startForgetPassword",
  async (email) => {
    try {
      const response = await usePatch(`${Urls.userForgetPassword}/${email}`);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const completeForgetPassword = createAsyncThunk(
  "completeForgetPassword",
  async (data) => {
    try {
      const response = await usePost(
        `${Urls.userCompleteForgetPassword}`,
        data
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const forgetPasswordSlice = createSlice({
  name: "forgetPassword",
  initialState: {
    data: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle Create Account
    builder.addCase(startForgetPassword.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(startForgetPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(startForgetPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(completeForgetPassword.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(completeForgetPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(completeForgetPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default forgetPasswordSlice.reducer;
