import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  totalPages: null,
  currentPage: 1,
  loading: true,
};

const newsDataSlice = createSlice({
  name: "newsData",
  initialState: initialState,
  reducers: {
    setNewsData: (state, action) => {
      state.data = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setNewsData, setTotalPages, setCurrentPage, setLoading } =
  newsDataSlice.actions;
export default newsDataSlice.reducer;
