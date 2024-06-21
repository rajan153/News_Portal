import React from "react";
import Card from "./Card";

function Cards({ data }) {
  return (
    <div className="flex gap-4 p-4 flex-wrap justify-center">
      {data.map((data, key) => (
        <Card
          key={key}
          name={data.title}
          type={data.description}
          image={data.urlToImage}
          id={data.publishedAt}
        />
      ))}
    </div>
  );
}

export default Cards;
