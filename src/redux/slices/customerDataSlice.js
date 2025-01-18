import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGet } from "../../hooks";
import Urls from "../../services/urls";

export const getCustomerDetails = createAsyncThunk(
  "customerDetails",
  async () => {
    try {
      const response = await useGet(
        Urls.userData,
        localStorage.getItem("token")
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const customerDataSlice = createSlice({
  name: "customerAccount",
  initialState: {
    data: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomerDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getCustomerDetails.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getCustomerDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.data;
      console.log("its me", action.payload);
    });
  },
});

export default customerDataSlice.reducer;
