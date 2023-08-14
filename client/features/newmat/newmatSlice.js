import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create new
export const addMat = createAsyncThunk(
  "texts/post",
  async ({ content, userId, source, link, description, tags }) => {
    const { data } = await axios.post(`/api/texts`, {
      content,
      userId,
      source,
      link,
      description,
      tags,
    });
    return data;
  }
);

// const newmatSlice = createSlice({
//   name: "newmat",
//   initialState: [],
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(addMat.fulfilled, (state, action) => {
//       return action.payload;
//     });
//   },
// });

// export default newmatSlice.reducer;
