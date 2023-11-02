import { createSlice } from "@reduxjs/toolkit";

const flagSlice = createSlice({
  name: "flag",
  initialState: {
    shouldFetch: true,
    showNewMat: false,
    showOverlay: false,
    showSingleMat: false,
    currentId: null,
  },
  reducers: {
    setShouldFetch: (state, action) => {
      state.shouldFetch = action.payload;
    },
    setShowNewMat: (state, action) => {
      state.showNewMat = action.payload;
    },
    setShowOverlay: (state, action) => {
      state.showOverlay = action.payload;
    },
    setShowSingleMat: (state, action) => {
      state.showSingleMat = action.payload;
    },
    setAllFalse: (state) => {
      state.showNewMat = false;
      state.showOverlay = false;
      state.showSingleMat = false;
    },
    setCurrentId: (state, action) => {
      state.currentId = action.payload;
    },
  },
});

export const {
  setShouldFetch,
  setShowNewMat,
  setShowOverlay,
  setShowSingleMat,
  setAllFalse,
  setCurrentId,
} = flagSlice.actions;
export default flagSlice.reducer;
