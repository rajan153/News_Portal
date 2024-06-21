import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function DetailNews() {
  const { id } = useParams();
  const { data } = useSelector((state) => state.newsData);
  const news = data.find((data, index) => data.publishedAt === id);
  return (
    <div>
      {!news ? (
        <div>News not found</div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 m-4">
          <h1 className="text-7xl font-extrabold">{news.source.name}</h1>
          <img src={news.urlToImage} alt="No Image found" width={2000} />
          <h2 className="font-bold text-3xl">{news.title}</h2>
          <p className="text-lg">{news.description}</p>
          <p>
            {news.content === null ? (
              <p className="text-red-600 font-bold text-lg">
                <span className="font-bold text-black">Content: </span>
                Content is not available for this news
              </p>
            ) : (
              <p className="text-lg">
                <span className="font-bold">Content: </span>
                {news.content}
              </p>
            )}
          </p>
          <div className="flex gap-8">
            <p className="text-lg">
              <span className="font-bold">publishedBy: </span>
              {news.author}
            </p>
            <p className="text-lg">
              <span className="font-bold">publishedAt: </span>
              {news.publishedAt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailNews;
