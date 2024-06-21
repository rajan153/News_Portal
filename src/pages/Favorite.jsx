import React, { useCallback, useEffect, useMemo, useState } from "react";
import Card from "../components/Cards/Card";

function Favorite() {
  const localFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
  return (
    <div>
      {localFavorites.length === 0 ? (
        <div>
          <h1 className="text-center text-2xl font-bold mt-8">
            No favorites added
          </h1>
        </div>
      ) : (
        <div>
          {localFavorites.map((item, index) => (
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
