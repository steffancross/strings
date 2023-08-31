import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import mainSlice from "../features/main/mainSlice";
import singlematSlice from "../features/singlemat/singlematSlice";
import tagSlice from "../features/tags/tagSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    texts: mainSlice,
    mat: singlematSlice,
    tags: tagSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
