import React from "react";
import loader from "/loader.gif";

const Loading = () => {
  document.title = "Movie App";
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <img src={loader} alt="" />
    </div>
  );
};

export default Loading;
