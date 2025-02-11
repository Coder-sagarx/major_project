import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useParams,
  Link,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import { asyncloadtv, removetv } from "../store/actions/tvAction";
import Loading from "./Loading";
import Horizontalcards from "../Templates/Horizontalcards";

const Tvdetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.tv);
  console.log(info);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv);
    };
  }, [id]);

  return info ? (
    <div
      className=" w-screen h-[210vh]  px-[10%] py-[1%] relative"
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no repeat",
      }}
    >
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] ri-arrow-left-line"
        ></Link>

        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>

        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>

        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          imdb
        </a>
      </nav>

      <div className="w-full flex">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[55vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />
        <div className="content ml-[5%] text-white">
          <h1 className="text-5xl font-black text-white">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
            <small className="text-2xl font-bold text-zinc-300">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>

          <div className="mt-3 mb-3 flex  items-center gap-x-5">
            <span className="  bottom-[30%] rounded-full bg-green-500 text-lg font-semibold text-white w-[5vh] h-[5vh] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className="w-[60px] font-semibold text-2xl leading-6">
              user score
            </h1>
            <h1>{info.detail.first_air_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>

          <div className="w-[80%] flex flex-col gap-y-2">
            <h1 className="font-semibold text-xl italic ">
              {info.detail.tagline}
            </h1>
            <h1 className=" text-xl ">Overview</h1>
            <p>{info.detail.overview}</p>
            <h1 className="text-2xl ">tv translated</h1>
            <p className="mb-8"> {info.translations.join(" ")}</p>

            <Link
              className="bg-[#6556CD] px-4 py-2 rounded-md w-[25%] "
              to={`${pathname}/trailer`}
            >
              <i className="ri-play-fill mr-2"></i>
              Play Trailer
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 w-[80%] flex flex-col gap-y-5 ">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-10 items-center text-white ">
            <h1>available on flatrate</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-10 items-center text-white ">
            <h1>available on rent</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-10 items-center text-white ">
            <h1>available on buy</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-400" />
      <h1 className=" m-3 text-3xl text-white font-semibold">seasons</h1>

      <div className="w-[100%] flex overflow-y-hidden mb-5 p-5">
        {info.detail.seasons.length > 0 ? (
          info.detail.seasons.map((s, i) => (
            <div className=" mr-[2%] w-[15vw]">
              <img
                className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] min-w-[15vw] h-[30vh] object-cover"
                src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
                alt=""
              />
              <h1 className="text-2xl font-semibold text-zinc-400 mt-3">
                {s.name}
              </h1>
            </div>
          ))
        ) : (
          <h1 className="text-3xl font-black text-white text-center mt-5">
            nothing to show
          </h1>
        )}
      </div>

      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-400" />
      <h1 className=" m-3 text-3xl text-white font-semibold">
        recommandation & sililar stuff
      </h1>
      <Horizontalcards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />

      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};
export default Tvdetails;
