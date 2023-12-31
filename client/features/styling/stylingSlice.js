import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all tags
export const fetchStyles = createAsyncThunk(
  "users/fetch",
  async ({ userId }) => {
    const { data } = await axios.get(`/api/users/styles?userId=${userId}`);
    return data;
  }
);

const styleSlice = createSlice({
  name: "styles",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStyles.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default styleSlice.reducer;
