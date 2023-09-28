import { createSlice } from "@reduxjs/toolkit";

const flagSlice = createSlice({
  name: "flag",
  initialState: {
    shouldFetch: true,
    showNewMat: false,
  },
  reducers: {
    setShouldFetch: (state, action) => {
      state.shouldFetch = action.payload;
    },
    setShowNewMat: (state, action) => {
      state.showNewMat = action.payload;
    },
  },
});

export const { setShouldFetch, setShowNewMat } = flagSlice.actions;
export default flagSlice.reducer;
