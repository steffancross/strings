import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create new
export const editMat = createAsyncThunk(
  "texts/put",
  async ({ content, link, description, tags, id }) => {
    const { data } = await axios.put(`/api/texts/${id}`, {
      content,
      link,
      description,
      tags,
    });
    return data;
  }
);
