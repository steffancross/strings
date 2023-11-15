import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create new
export const editMat = createAsyncThunk(
  "texts/put",
  async ({ content, link, description, tags, id, userId }) => {
    const { data } = await axios.put(`/api/texts/${id}`, {
      content,
      link,
      description,
      tags,
      userId,
    });
    return data;
  }
);
