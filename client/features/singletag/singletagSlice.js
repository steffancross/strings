import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get tag
export const fetchTag = createAsyncThunk("tag/fetch", async (id) => {
  const { data } = await axios.get(`/api/tags/${id}`);
  return data;
});

// delete tag
export const deleteTag = createAsyncThunk("tag/delete", async (id) => {
  const { data } = await axios.delete(`/api/tags/${id}`);
  return data;
});

const singletagSlice = createSlice({
  name: "tag",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTag.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default singletagSlice.reducer;
