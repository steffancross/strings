import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create new
export const addMat = createAsyncThunk(
  "texts/post",
  async ({ content, userId, link, description, tags }) => {
    const { data } = await axios.post(`/api/texts`, {
      content,
      userId,
      link,
      description,
      tags,
    });
    return data;
  }
);
