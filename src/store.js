import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./redux/slices/customerSlice";
import otpReducer from "./redux/slices/verifyEmailSlice";
import forgetPasswordReducer from "./redux/slices/forgetPasswordSlice";
import loginReducer from "./redux/slices/authSlice";
import customerDataReducer from "./redux/slices/customerDataSlice";
import dailyRandomVerseReducer from "./redux/slices/dailyRandomVerseSlice";
import preferenceReducer from "./redux/slices/preferenceSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    otp: otpReducer,
    forgetPassword: forgetPasswordReducer,
    login: loginReducer,
    customerData: customerDataReducer,
    randomVerse: dailyRandomVerseReducer,
    preference: preferenceReducer,
  },
});

export default store;
