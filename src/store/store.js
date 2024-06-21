import { configureStore } from "@reduxjs/toolkit";
import newsDataSlice from "../features/newsDataSlice";

const store = configureStore({
  reducer: {
    newsData: newsDataSlice,
  },
});

export default store;
