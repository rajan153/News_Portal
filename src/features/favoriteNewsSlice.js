import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteNews: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
};

const favoriteNewsSlice = createSlice({
  name: "favoriteNews",
  initialState: initialState,
  reducers: {
    setFavoriteNews: (state, action) => {
      state.favoriteNews = action.payload;
    },
  },
});

export const { setFavoriteNews } = favoriteNewsSlice.actions;
export default favoriteNewsSlice.reducer;
