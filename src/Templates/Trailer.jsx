import react from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, Link, useNavigate } from "react-router-dom";

import NotFound from "../Components/NotFound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideos = useSelector((state) => state[category].info.videos);

  return  (
    <div className=" absolute bg-[rgba(0,0,0,0.8)] z-100 top-0 left-0 h-screen w-screen flex items-center justify-center">
      <Link
        onClick={() => navigate(-1)}
        className="absolute hover:text-[#6556cd] ri-close-fill top-[5%] left-[5%] text-white text-3xl"
      ></Link>
      {ytvideos ?(
        <ReactPlayer
        height={500}
        width={1000}
        url={`https://www.youtube.com/watch?v=${ytvideos.key}`}
      />
      ):(
        <NotFound/>
      )}
      
    </div>
  )  
  
};
export default Trailer;
