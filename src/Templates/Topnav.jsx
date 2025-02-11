import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import noimage from "/noimage.jpg";
const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const Getsearchs = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("error :", error);
    }
  };

  useEffect(() => {
    Getsearchs();
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh]  relative flex justify-start items-center ml-[10%] ">
      <i className=" text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%]  text-white mx-10 text-xl p-2 outline-none border-none bg-transparent"
        type="text"
        placeholder="search ..."
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className=" text-zinc-400 text-3xl ri-close-fill"
        ></i>
      )}

      <div className=" z-[100] absolute  w-[60%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto ">
        {searches.map((s, i) => (
          <Link
          to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className=" hover:text-black hover:bg-zinc-300 duration-300 font-semibold  text-zinc-500 w-[100%] p-6  flex justify-start items-center border-b-2 border-zinc-300"
          >
            <img
              className="w-[10vw] h-[10vh] mr-5 object-cover rounded"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span className="">
              {s.original_title || s.name || s.title || s.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Topnav;
