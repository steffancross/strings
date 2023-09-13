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

// get by tag
export const fetchTextsByTag = createAsyncThunk(
  "textsbytag/fetch",
  async ({ userId, tagName }) => {
    const { data } = await axios.get(
      `/api/texts/byTag?userId=${userId}&tagName=${tagName}`
    );
    return data;
  }
);

// get by content
export const fetchTextsByContent = createAsyncThunk(
  "textsbycontent/fetch",
  async ({ userId, searchTerm }) => {
    const { data } = await axios.get(
      `/api/texts/byContent?userId=${userId}&searchTerm=${searchTerm}`
    );
    return data;
  }
);

const mainSlice = createSlice({
  name: "mats",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTexts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchTextsByTag.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchTextsByContent.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default mainSlice.reducer;
