import { configureStore } from "@reduxjs/toolkit";
import newsDataSlice from "../features/newsDataSlice";
import favoriteNewsSlice from "../features/favoriteNewsSlice";

const store = configureStore({
  reducer: {
    newsData: newsDataSlice,
    favoriteData: favoriteNewsSlice,
  },
});

export default store;
