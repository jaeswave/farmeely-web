import axios from "axios";
// import {convertTo24HourFormat} from "../utils"

const BASE_URL = "http://localhost:1290";

export const fetchDailyRandomVerse = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/customer/random-verse`);
    return response.data;
  } catch (error) {
    console.error("Error fetching random verse:", error);
    return error.message;
  }
};

export const createCustomer = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/customer`, data);
    return response.data;
  } catch (error) {
    if (
      error.response.data.isVerify &&
      error.response.data.isVerify === "009"
    ) {
      const errData = {
        message: error.response.data.message,
        isVerify: error.response.data.isVerify,
      };
      throw errData;
    }

    if (error.response) {
      throw new Error(error.response.data.message || "Server error occurred");
    }

    if (error.request) {
      throw new Error(
        "Network error. Please check your connection and try again."
      );
    }

    throw new Error("An unexpected error occurred. Please try again.");
  }
};

export const submitOtp = async (email, otp) => {
  console.log("Submitting OTP with email:", email, "OTP:", otp);
  try {
    const response = await axios.patch(
      `${BASE_URL}/verify-email/${email}/${otp}`
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data?.message || error.message
      : "Network error. Please try again later.";
    console.error("Axios error:", errorMessage);
    return errorMessage;
  }
};

export const resendOtp = async (email) => {
  try {
    const response = await axios.patch(`${BASE_URL}/resend-otp/${email}`);
    return response.data;
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data?.message || error.message
      : "Network error. Please try again later.";
    return errorMessage;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/customer/login`, {
      email,
      password,
    });

    return response;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Network error. Please try again later.";
    throw new Error(errorMessage);
  }
};

export const getUser = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/customer`, {
      headers: {
        token: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Network error. Please try again later.";
    const statusCode = error.response?.status;
    if (statusCode === 401) {
      throw new Error("Unauthorized");
    }

    throw new Error(errorMessage);
  }
};


export const createCustomerPreference = async (token,data) => {
  console.log(data);

// data.schedule_time = convertTo24HourFormat(data.schedule_time);


  try {
    const response = await axios.post(`${BASE_URL}/customer/preference`, data, {
      headers: {
        token: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Network error. Please try again later.";
    throw new Error(errorMessage);
  }
}