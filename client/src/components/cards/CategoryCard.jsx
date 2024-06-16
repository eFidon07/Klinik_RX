import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ linkTo, label, imageUrl, index }) => {
  return (
    <Link
      to={linkTo || ""}
      className={`group relative w-[49%] md:w-[32.5%] h-[10rem] sm:h-[12rem] overflow-hidden border ${
        index % 2 !== 0 && "hover:border-2 hover:border-primary"
      } border-stone-400 rounded-2xl flex items-center justify-center transition-all`}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`image representing ${label}`}
          className="group-hover:scale-125 w-full h-full rounded-2xl object-cover object-center transition-all duration-300"
        />
      )}
      <span
        className={`absolute top-0 left-0 w-full h-full ${
          index % 2 === 0
            ? "bg-black bg-opacity-45 text-stone-100"
            : "text-stone-700 group-hover:text-primary"
        } text-2xl text-center sm:text-4xl md:text-3xl lg:text-4xl font-medium flex items-center justify-center`}
      >
        {label}
      </span>
    </Link>
  );
};

export default CategoryCard;
