import React from "react";
import notfound from "/notfound.gif";

const Notfound = () => {
  document.title = "Movie App | 404";
  return (
    <div className="w-screen h-screen  flex justify-center items-center bg-black">
      <img src={notfound} alt="" />
    </div>
  );
};

export default Notfound;
