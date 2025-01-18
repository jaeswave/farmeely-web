import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { usePatch } from "../../hooks";
import Urls from "../../services/urls";

export const verifyCustomer = createAsyncThunk(
  "verifyCustomerAccount",
  async ({ email, otp }) => {
    try {
      console.log("i am here: ", email, otp);
      const response = await usePatch(`${Urls.verifyEmail}/${email}/${otp}`);
      console.log("i am here again: ", response.data);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const resendOtp = createAsyncThunk(
  "resendCustomerOtp",
  async (email) => {
    try {
      const response = await usePatch(`${Urls.userResendOtp}/${email}`);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const verifyOtpSlice = createSlice({
  name: "verifyOtp",
  initialState: {
    data: {},
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyCustomer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyCustomer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(verifyCustomer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
    builder
      .addCase(resendOtp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resendOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(resendOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export default verifyOtpSlice.reducer;
