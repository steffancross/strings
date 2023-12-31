import { createSlice } from "@reduxjs/toolkit";

const flagSlice = createSlice({
  name: "flag",
  initialState: {
    shouldFetch: true,
    showNewMat: false,
    showOverlay: false,
    showSingleMat: false,
    showSingleTag: false,
    showStyling: false,
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
    setShowSingleTag: (state, action) => {
      state.showSingleTag = action.payload;
    },
    setShowStyling: (state, action) => {
      state.showStyling = action.payload;
    },
    setAllFalse: (state) => {
      state.showNewMat = false;
      state.showOverlay = false;
      state.showSingleMat = false;
      state.showSingleTag = false;
      state.showStyling = false;
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
  setShowSingleTag,
  setShowStyling,
  setAllFalse,
  setCurrentId,
} = flagSlice.actions;
export default flagSlice.reducer;
