import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmE3NjZlMDRhZTNlZjViMDAzMDM3YjliZTQwYjQ4OSIsInN1YiI6IjY2NzJjZjM2OTY1NDgwNDJiMzJhNjQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2kyBbcqncnDciLO8Ekmb1o0RTgqJYiC435LU6Iuf0nk",
  },
});

export default instance;
