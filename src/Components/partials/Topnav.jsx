import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/no-image.png";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center mt-5 ml-[15%] ">
      <i className="text-zinc-400 text-xl ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-5 px-8 py-2 text-[1.1vw] outline-none border rounded-[50px] border-zinc-400 bg-transparent"
        type="text"
        placeholder="Search"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-zinc-400 text-2xl ri-close-fill"
        ></i>
      )}

      <div className="z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[85%] rounded-2xl left-[3%] overflow-auto">
        {searches.map((s, i) => (
          <Link
            to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] px-6 py-5 flex justify-start items-center border-b-2 border-zinc-100"
          >
            <img
              className="w-[7vh] h-[7vh] object-cover rounded mr-5 shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
