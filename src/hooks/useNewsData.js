import axios from "axios";
import { useEffect, useState } from "react";
import {
  setCurrentPage,
  setNewsData,
  setTotalPages,
} from "../features/newsDataSlice";
import { useDispatch } from "react-redux";

export function fetchNews(category, query = "", currentPage = 1) {
  const pageSize = 10;
  const [totalResult, setTotalResult] = useState(0);
  const dispatch = useDispatch();

  if (category === "All") {
    category = "";
  }

  useEffect(() => {
    axios
      .get("https://newsapi.org/v2/top-headlines", {
        params: {
          apiKey: import.meta.env.VITE_NEWS_API_KEY,
          country: "in",
          page: currentPage,
          pageSize: pageSize,
          category: category,
          q: query,
        },
      })
      .then((response) => {
        dispatch(
          setNewsData(
            response.data.articles.filter(
              (article) => article.urlToImage !== null
            )
          )
        );
        setTotalResult(response.data.totalResults);
        dispatch(setTotalPages(Math.ceil(totalResult / pageSize)));
        dispatch(setCurrentPage(currentPage));
      })
      .catch((err) => console.error("Error while fetching the news", err));
  }, [currentPage, category, query]);
}
