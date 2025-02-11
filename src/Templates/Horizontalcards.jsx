import react from "react";
import {Link} from "react-router-dom"
const Horizontalcards = ({ data }) => {
  return (
    <div className="w-full  flex  overflow-y-hidden mb-5 p-5">
      {data.length >0 ? data.map((d, i) => (
        <Link
          to={`/${d.media_type}/details/${d.id}`}
          key={i}
          className="min-w-[15%] h-[35vh]  mr-5 mb-5 bg-zinc-900   "
        >
          <img
            className="w-full h-[55%] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.poster_path
            }`}
            alt=""
          />
          <div className="text-white p-3 h-[45%]  overflow-y-auto">
            <h1 className=" font-semibold   ">
              {d.original_title || d.name || d.title || d.original_name}
            </h1>
            <p className=" text-xs pb-5 ">
              {d.overview.slice(0, 50)}...
              <span className="text-blue-600">more</span>
            </p>
          </div>
        </Link>
      )): <h1 className="text-3xl font-black text-white text-center mt-5">nothing to show</h1>}
    </div>
  );
};
export default Horizontalcards;
