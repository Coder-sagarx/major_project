import { Link } from "react-router-dom";

import react from "react";
const Sidenav = () => {
  return (
    <>
      <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
        <h1 className="text-2xl text-white font-bold">
          <i className="text-[#6556C8] ri-tv-fill mr-2 "></i>
          <span className="text-2xl">DEVLOPERS</span>
        </h1>

        <nav className="flex flex-col text-zinc-400 text-xl gap-3">
          <h1 className="text-white font-semibold text-xl mt-8 mb-2">
            New Feeds
          </h1>
          <Link to="/Trending" className="hover:bg-[#6556C8] hover:text-white duration:300 rounded-lg p-4">
            <i  className="ri-fire-fill mr-2"></i>
            Trending
          </Link>
          <Link to="/Popular" className="hover:bg-[#6556C8] hover:text-white duration:300 rounded-lg p-4">
            <i className="ri-sparkling-2-line mr-2"></i>
            Popular
          </Link>
          <Link to="/Movie" className="hover:bg-[#6556C8] hover:text-white duration:300 rounded-lg p-4">
            <i className="ri-movie-2-ai-fill mr-2"></i>
            Movie
          </Link>
          <Link to="/Tvshows" className="hover:bg-[#6556C8] hover:text-white duration:300 rounded-lg p-4">
            <i className="ri-tv-fill mr-2"></i>
            Tv Shows
          </Link>
          <Link to="/People" className="hover:bg-[#6556C8] hover:text-white duration:300 rounded-lg p-4">
            <i className="ri-team-fill mr-2"></i>
            People
          </Link>
        </nav>
        <hr className="border-none h-[1px] bg-zinc-400" />
        <nav className="flex flex-col text-zinc-400 text-xl gap-3">
          <h1 className="text-white font-semibold text-xl mt-8 mb-2">
            Website Information
          </h1>
          <Link className="hover:bg-[#6556C8] hover:text-white duration:300 rounded-lg p-4">
            <i className="ri-information-fill mr-2"></i>
            About
          </Link>
          <Link className="hover:bg-[#6556C8] hover:text-white duration:300 rounded-lg p-4">
            <i className="ri-phone-fill mr-2"></i>
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};
export default Sidenav;
