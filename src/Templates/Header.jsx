import react from "react";
import { Link } from "react-router-dom";
const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no repeat",
      }}
      className="w-full h-[50vh]  flex flex-col justify-end items-start p-[5%]"
    >
      <h1 className=" w-[70%] text-white font-black text-4xl ">
        {data.original_title || data.name || data.title || data.original_name}
      </h1>
      <p className="w-[60%] text-white text-xs mt-3 mb-3">
        {data.overview.slice(100)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-600"
        >
          more
        </Link>
      </p>
      <p className="text-white ">
        <i className="text-green-400 ri-megaphone-fill"></i>
        {data.release_date || "no information"}
        <i className="ml-5 text-blue-700 ri-vidicon-2-fill"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link className="mt-5 px-3 py-2 text-white rounded-md bg-[#6556CD]">
        watch trailer
      </Link>
    </div>
  );
};
export default Header;
