import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card({ name, type, image, id }) {
  
  return (
    <Link to={`/news/${id}`} className="border shadow-md p-4 cursor-pointer flex items-center gap-4 w-full flex-col text-center md:flex-row md:text-left">
      <img src={image} alt={name} width={150} />
      <div>
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="font-light text-sm">{type}</p>
      </div>
    </Link>
  );
}

export default Card;
