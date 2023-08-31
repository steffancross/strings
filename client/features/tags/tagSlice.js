import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all text
export const fetchTags = createAsyncThunk("tags/fetch", async ({ userId }) => {
  const { data } = await axios.get(`/api/tags?userId=${userId}`);
  return data;
});

const tagSlice = createSlice({
  name: "tags",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTags.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default tagSlice.reducer;
