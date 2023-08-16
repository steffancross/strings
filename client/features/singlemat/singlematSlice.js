import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get single mat
export const fetchMat = createAsyncThunk("singlemat/fetch", async (id) => {
  const { data } = await axios.get(`/api/texts/${id}`);
  return data;
});

// delete mat
export const deleteMat = createAsyncThunk("singlemat/delete", async (id) => {
  const { data } = await axios.delete(`/api/texts/${id}`);
  return data;
});

const matSlice = createSlice({
  name: "mat",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMat.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default matSlice.reducer;
