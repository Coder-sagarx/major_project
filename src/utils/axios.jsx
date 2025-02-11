import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDBhZmEzYTgyZWExOWI1NGY2NmY5ODM4YTcwOTA0MiIsIm5iZiI6MTczNzYyMzMyNC4zNTIsInN1YiI6IjY3OTIwNzFjZTVhMDkyMjA1M2ZhNzRlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MRFSavM-jKKRsdeZEPVBPMtiNeQz7KV032tRY5nZhwY",
  },
});

export default instance;
