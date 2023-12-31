import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import mainSlice from "../features/main/mainSlice";
import singlematSlice from "../features/singlemat/singlematSlice";
import tagSlice from "../features/tags/tagSlice";
import singletagSlice from "../features/singletag/singletagSlice";
import flagSlice from "../features/utils/flagSlice";
import stylingSlice from "../features/styling/stylingSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    mats: mainSlice,
    mat: singlematSlice,
    tags: tagSlice,
    tag: singletagSlice,
    flags: flagSlice,
    styles: stylingSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
