import { configureStore } from "@reduxjs/toolkit";
import newsDataSlice from "../features/newsDataSlice";
import favouriteNewsSlice from "../features/favouriteNewsSlice";

const store = configureStore({
  reducer: {
    newsData: newsDataSlice,
    favouriteData: favouriteNewsSlice,
  },
});

export default store;