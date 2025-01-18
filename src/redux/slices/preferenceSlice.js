import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGet, usePost, usePatch } from "../../hooks";
import Urls from "../../services/urls";

export const getPreference = createAsyncThunk(
  "preferenceData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await useGet(
        Urls.userPreference,
        localStorage.getItem("token")
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch preferences"
      );
    }
  }
);

export const createCustomerPreference = createAsyncThunk(
  "createPreferences",
  async (data) => {
    try {
      const response = await usePost(
        Urls.userPreference,
        data,
        localStorage.getItem("token")
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const updateCustomerPreference = createAsyncThunk(
  "updatePreferences",
  async (data) => {
    try {
      const response = await usePatch(
        Urls.userPreference,
        data,
        localStorage.getItem("token")
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const preferenceSlice = createSlice({
  name: "preference",
  initialState: {
    data: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPreference.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPreference.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getPreference.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "An error occurred";
      })
      .addCase(createCustomerPreference.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createCustomerPreference.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(createCustomerPreference.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "An error occurred";
      });
    builder
      .addCase(updateCustomerPreference.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCustomerPreference.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(updateCustomerPreference.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "An error occurred";
      });
  },
});

export default preferenceSlice.reducer;
