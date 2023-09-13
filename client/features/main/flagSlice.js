import { createSlice } from "@reduxjs/toolkit";

const flagSlice = createSlice({
  name: "flag",
  initialState: true,
  reducers: {
    setShouldFetch: (state, action) => {
      return action.payload;
    },
  },
});

export const { setShouldFetch } = flagSlice.actions;
export default flagSlice.reducer;
