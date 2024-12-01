import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] mr-2 ri-tv-fill"></i>
        <span>Movie App</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl ">
        <h1 className="text-white font-semibold text-xl mt-5 mb-3">
          New Feeds
        </h1>
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2"
        >
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2"
        >
          <i className="ri-bard-fill"></i> Popular
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2"
        >
          <i className="ri-movie-2-fill"></i> Movies
        </Link>
        <Link
          to="tv"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2"
        >
          <i className="ri-tv-2-fill"></i> Tv Shows
        </Link>
        <Link
          to="people"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2"
        >
          <i className="ri-team-fill"></i> People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400 mt-3" />
      <nav className="flex flex-col text-zinc-400 text-xl">
        <h1 className="text-white font-semibold text-xl mt-7 mb-3">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
          <i className="ri-information-fill"></i> About Us
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
          <i className="ri-phone-fill"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
