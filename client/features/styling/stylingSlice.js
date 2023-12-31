import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get styles
export const fetchStyles = createAsyncThunk(
  "users/fetch",
  async ({ userId }) => {
    const { data } = await axios.get(`/api/users/styles?userId=${userId}`);
    return data;
  }
);

// update styles
export const editStyles = createAsyncThunk(
  "users/put",
  async ({ primaryColor, secondaryColor, tertiaryColor, columns, userId }) => {
    const { data } = await axios.put(`/api/users/styles`, {
      primaryColor,
      secondaryColor,
      tertiaryColor,
      columns,
      userId,
    });
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
