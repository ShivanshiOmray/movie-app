import React from "react";
import { Link } from "react-router-dom";
import noimage from "/no-image.png";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-[full] h-full bg-[#1F1E24] justify-center">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          key={i}
          className="relative w-[30vh] mr-[5%] mb-[5%]"
        >
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] w-full object-cover"
            src={
              c.poster_path || c.backdrop_path || c.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.poster_path || c.backdrop_path || c.profile_path
                  }`
                : noimage
            }
            alt=""
          />
          <h1 className="text-[1.3vw] text-zinc-300 mt-3 font-semibold">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>

          {c.vote_average && (
            <div
              className="absolute -right-[12%] bottom-[30%] rounded-full 
          text-xl font-semibold bg-yellow-600 text-white w-[8vh] h-[8vh] 
          flex justify-center items-center"
            >
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
