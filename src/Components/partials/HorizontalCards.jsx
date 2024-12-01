import React from "react";
import { Link } from "react-router-dom";
import noimage from "/no-image.png";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-[100%]  flex overflow-y-hidden mb-5 px-10">
      {data.map((d, i) => (
        <Link
          to={`/${d.media_type}/details/${d.id}`}
          key={i}
          className="min-w-[18%] bg-zinc-900 mr-5"
        >
          <img
            className="w-full h-[55%] object-cover"
            src={
              d.backdrop_path || d.poster_path
                ? `https://image.tmdb.org/t/p/original/${
                    d.backdrop_path || d.poster_path
                  }`
                : noimage
            }
            alt=""
          />
          <div className="text-white p-3 h-[45%] overflow-y-auto">
            <h1 className="text-[1.1vw] font-semibold text-white">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className="text-[1vw]">
              {d.overview.slice(0, 50)}...
              <Link className="text-zinc-500">more</Link>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalCards;
