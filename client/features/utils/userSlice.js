import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// change first visit
export const setFalseFirstVisit = createAsyncThunk("users/put", async (id) => {
  const { data } = await axios.put(`/api/users/${id}`);
  return data;
});
