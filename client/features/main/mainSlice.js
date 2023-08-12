import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all text
export const fetchTexts = createAsyncThunk(
  "texts/fetch",
  async ({ userId }) => {
    const { data } = await axios.get(`/api/texts?userId=${userId}`);
    return data;
  }
);

const mainSlice = createSlice({
  name: "texts",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTexts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default mainSlice.reducer;
