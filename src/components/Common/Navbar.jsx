import { useDebounce } from "@uidotdev/usehooks";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { fetchNews } from "../../hooks/useNewsData";
import { setLoading } from "../../features/newsDataSlice";
import { useDispatch } from "react-redux";
import { CiSaveDown2 } from "react-icons/ci";

function Navbar() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useDebounce(
    () => {
      setQuery(query);
    },
    1000,
    [query]
  );

  const localFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  function sendData(category, query) {
    fetchNews(category, query, 1);
    dispatch(setLoading(false));
  }

  sendData(category, query);


  return (
    <div className="p-4 flex flex-col border-b border-gray-400 gap-3 shadow-md">
      <div className="flex flex-row justify-center items-center flex-wrap md:justify-between gap-4">
        <h1 className="font-extrabold text-2xl text-gray-700">
          React News Portal
        </h1>
        <div className="flex gap-2 flex-wrap justify-center w-[30rem]">
          <input
            type="text"
            placeholder="Search for Topic"
            className="p-2 rounded-full bg-gray-200 w-full"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Link
          to={"/favourites"}
          className="flex flex-col items-center justify-center relative"
        >
          <div className="absolute top-0">
            {localFavorites.length !== 0 && (
              <p className="px-2 rounded-full bg-red-500 text-white">
                {localFavorites.length}
              </p>
            )}
          </div>
          <CiSaveDown2 size={40} />
          <p className="font-bold">Favorite News</p>
        </Link>
      </div>
      <div className="flex gap-4 justify-center items-center flex-wrap md:divide-x-2 md:divide-black">
        <NavLink
          className={() =>
            category === "All"
              ? "font-light py-1 px-3 rounded-full bg-[#604CC3] text-[#FFF6E9]"
              : "font-light py-1 px-3 rounded-full"
          }
          onClick={() => setCategory("All")}
        >
          All
        </NavLink>
        <div className="flex pl-4 gap-4 justify-center flex-wrap font-light">
          <NavLink
            className={() =>
              category === "Business"
                ? "py-1 px-3 rounded-full bg-[#604CC3] text-[#FFF6E9]"
                : "py-1 px-3 rounded-full"
            }
            onClick={() => setCategory("Business")}
          >
            Business
          </NavLink>
          <NavLink
            className={() =>
              category === "Entertainment"
                ? "py-1 px-3 rounded-full bg-[#604CC3] text-[#FFF6E9]"
                : "py-1 px-3 rounded-full"
            }
            onClick={() => setCategory("Entertainment")}
          >
            Entertainment
          </NavLink>
          <NavLink
            className={() =>
              category === "General"
                ? "py-1 px-3 rounded-full bg-[#604CC3] text-[#FFF6E9]"
                : "py-1 px-3 rounded-full"
            }
            onClick={() => setCategory("General")}
          >
            General
          </NavLink>
          <NavLink
            className={() =>
              category === "Health"
                ? "py-1 px-3 rounded-full bg-[#604CC3] text-[#FFF6E9]"
                : "py-1 px-3 rounded-full"
            }
            onClick={() => setCategory("Health")}
          >
            Health
          </NavLink>
          <NavLink
            className={() =>
              category === "Science"
                ? "py-1 px-3 rounded-full bg-[#604CC3] text-[#FFF6E9]"
                : "py-1 px-3 rounded-full"
            }
            onClick={() => setCategory("Science")}
          >
            Science
          </NavLink>
          <NavLink
            className={() =>
              category === "Sports"
                ? "py-1 px-3 rounded-full bg-[#604CC3] text-[#FFF6E9]"
                : "py-1 px-3 rounded-full"
            }
            onClick={() => setCategory("Sports")}
          >
            Sports
          </NavLink>
          <NavLink
            className={() =>
              category === "Technology"
                ? "py-1 px-3 rounded-full bg-[#604CC3] text-[#FFF6E9]"
                : "py-1 px-3 rounded-full"
            }
            onClick={() => setCategory("Technology")}
          >
            Technology
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
