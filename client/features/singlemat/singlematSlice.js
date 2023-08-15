import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all text
export const fetchMat = createAsyncThunk("singlemat/fetch", async (id) => {
  const { data } = await axios.get(`/api/texts/${id}`);
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
