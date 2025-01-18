import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { usePost } from "../../hooks";
import Urls from "../../services/urls";

export const customerLogin = createAsyncThunk("loginAccount", async (data) => {
  try {
    const response = await usePost(Urls.login, data);
    return response;
  } catch (error) {
    return error.response.data;
  }
});

const loginSlice = createSlice({
  name: "loginAccount",
  initialState: {
    data: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle Create Account
    builder.addCase(customerLogin.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(customerLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(customerLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default loginSlice.reducer;
