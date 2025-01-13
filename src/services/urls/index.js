// const baseUrl = import.meta.env.VITE_BASE_URL
const baseUrl = import.meta.env.VITE_BASE_URL;

const Urls = {
  userSignUp: `${baseUrl}/customer`,
  verifyEmail: `${baseUrl}/verify-email`,
  login: `${baseUrl}/customer/login`,
  userData: `${baseUrl}/customer`,
};

export default Urls;
