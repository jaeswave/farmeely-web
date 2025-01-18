// const baseUrl = import.meta.env.VITE_BASE_URL
const baseUrl = import.meta.env.VITE_BASE_URL;

const Urls = {
  userSignUp: `${baseUrl}/customer`,
  verifyEmail: `${baseUrl}/verify-email`,
  userResendOtp: `${baseUrl}/resend-otp`,
  login: `${baseUrl}/customer/login`,
  userData: `${baseUrl}/customer`,
  userForgetPassword: `${baseUrl}/customer/forget-password`,
  userCompleteForgetPassword: `${baseUrl}/customer/forget-password/complete`,
  randomVerse: `${baseUrl}/customer/random-verse`,
  userPreference: `${baseUrl}/customer/preference`,
  
};

export default Urls;
