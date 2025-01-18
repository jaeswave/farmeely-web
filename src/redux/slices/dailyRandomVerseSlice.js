import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGet } from "../../hooks";
import Urls from "../../services/urls";

export const getDailyRandomVerse = createAsyncThunk(
  "dailyRandomVerse",
  async () => {
    try {
      const response = await useGet(Urls.randomVerse);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const dailyRandomVerseSlice = createSlice({
  name: "dailyRandomVerse",
  initialState: {
    verse: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDailyRandomVerse.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getDailyRandomVerse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.verse = action.payload;
    });
    builder.addCase(getDailyRandomVerse.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default dailyRandomVerseSlice.reducer;
