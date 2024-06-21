import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "../../styles/NewsComponent.css";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function Card({ name, type, image, id }) {
  const [favorites, setFavorites] = useState([]); // [1
  const { data } = useSelector((state) => state.newsData);

  const handleFavorite = (news) => {
    const newData = data.find((item) => item.publishedAt === news);
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favorites.some((item) => item.publishedAt === news);

    if (isFavorite) {
      const newFavorites = favorites.filter(
        (item) => item.publishedAt !== news
      );
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      toast.success("News removed from favorites");
    } else {
      // For Duplicate News
      if (!favorites.includes(newData)) {
        favorites.push(newData);
        setFavorites(newData);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        toast.success("News added to favorites");
      }
    }
  };

  const isFavorite = (news) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.some((item) => item.publishedAt === news);
  };

  return (
    <div className="border shadow-md p-4 cursor-pointer flex items-center justify-between gap-4 w-full flex-col text-center md:flex-row md:text-left">
      <Link
        to={`/news/${id}`}
        className="flex items-center gap-4 w-full flex-col text-center md:flex-row md:text-left"
      >
        <img src={image} alt={name} width={150} />
        <div>
          <h2 className="font-bold text-xl">{name}</h2>
          <p className="font-light text-sm">{type}</p>
        </div>
      </Link>
      <button className="favorite-button" onClick={() => handleFavorite(id)}>
        <FaHeart className={isFavorite(id) ? "favorite" : "not-favorite"} />
      </button>
    </div>
  );
}

export default Card;
