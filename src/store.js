import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./redux/slices/customerSlice";
import otpReducer from "./redux/slices/verifyEmailSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    otp: otpReducer
  },
});



export default store;