import React, { useState } from "react";
import { fetchNews } from "../../hooks/useNewsData";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../features/newsDataSlice";

function Footer({ totalPages }) {
  const { currentPage } = useSelector((state) => state.newsData);
  const dispatch = useDispatch();

  fetchNews("All", "", currentPage);

  const handlePrev = () => {
    const newValue = Math.max(currentPage - 1, 1);
    dispatch(setCurrentPage(newValue));
  };

  const handleNext = () => {
    const newValue = Math.min(currentPage + 1, totalPages);
    dispatch(setCurrentPage(newValue));
  };

  const handlePageClick = (page) => {
    dispatch(setCurrentPage(page));
  };

  const renderPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`${
            i === currentPage ? "bg-[#604CC3] text-[#FFF6E9]" : ""
          } px-3 py-1 rounded-full`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };
  return (
    <div className="flex items-center justify-center gap-4 p-4 border-t border-gray-400 shadow-md">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="bg-[#604CC3] py-1 px-3 text-[#FFF6E9] rounded-full hover:bg-[#604ee7]"
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="bg-[#604CC3] py-1 px-3 text-[#FFF6E9] rounded-full hover:bg-[#604ee7]"
      >
        Next
      </button>
      <p className="p-4">
        Pages: {currentPage}/{totalPages === 0 ? 1 : totalPages}
      </p>
    </div>
  );
}

export default Footer;
