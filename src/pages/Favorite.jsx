import React from "react";
import Card from "../components/Cards/Card";
import { useSelector } from "react-redux";

function Favorite() {
  const { favoriteNews } = useSelector((state) => state.favoriteNews);

  return (
    <div className="m-4">
      {favoriteNews.length === 0 ? (
        <div>
          <h1 className="text-center text-2xl font-bold mt-8">
            No favorites added
          </h1>
        </div>
      ) : (
        <div>
          {favoriteNews.map((item, index) => (
            <Card
              key={index}
              name={item.title}
              type={item.source.name}
              image={item.urlToImage}
              id={item.publishedAt}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorite;
