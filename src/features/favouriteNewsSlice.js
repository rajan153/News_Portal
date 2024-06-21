import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouriteData: localStorage.getItem("favourite")
    ? JSON.parse(localStorage.getItem("favourite"))
    : null,
};

const favouriteNewsData = createSlice({
  name: "favouriteNewsData",
  initialState: initialState,
  reducers: {
    setFavouriteNewsData(state, action) {
      state.favouriteData = action.payload;
    },
  },
});

export const { setFavouriteNewsData } = favouriteNewsData.actions;
export default favouriteNewsData.reducer;
