import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import mainSlice from "../features/main/mainSlice";
import singlematSlice from "../features/singlemat/singlematSlice";
import tagSlice from "../features/tags/tagSlice";
import singletagSlice from "../features/singletag/singletagSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    mats: mainSlice,
    mat: singlematSlice,
    tags: tagSlice,
    tag: singletagSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
