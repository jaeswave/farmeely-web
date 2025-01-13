import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { usePatch} from "../../hooks";
import Urls from "../../services/urls";


export const verifyCustomerAccount = createAsyncThunk(
  "verifyCustomerAccount",
  async ({ email, otp }) => {
    try {
      const response = await usePatch(`${Urls.verifyEmail}/${email}/${otp}`);
      console.log("Response------:", response);
      return response.data; 
    } catch (error) {
      return error.response.data;
    }
  }
);




const verifyOtpSlice = createSlice({
    name: "verifyOtp",
    initialState: {
      data : {},
      isLoading: false,
      error: null,
    },
    extraReducers: (builder) => {
      builder
        .addCase(verifyCustomerAccount.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(verifyCustomerAccount.fulfilled, (state, action) => {
          state.isLoading = false;
          state.data = action.payload
        })
        .addCase(verifyCustomerAccount.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error;
        });
    },
  });
  
  export default verifyOtpSlice.reducer;