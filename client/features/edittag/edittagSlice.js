import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// edit
export const editTag = createAsyncThunk("texts/put", async ({ name, id }) => {
  const { data } = await axios.put(`/api/tags/${id}`, {
    name,
  });
  return data;
});
