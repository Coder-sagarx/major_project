import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useParams,
  Link,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import { asyncloadpeople, removepeople } from "../store/actions/Peopleaction";
import Loading from "./Loading";

const Peopledetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { info } = useSelector((state) => state.people);
  console.log(info);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadpeople(id));
    return () => {
      dispatch(removepeople);
    };
  }, [id]);

  return info ? (
    <div className="w-full h-screen px-[10%] py-[1%] bg-[#1F1E24]">
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] ri-arrow-left-line"
        ></Link>

        <a
          target="_blank"
          href={`https://en.wikipedia.org/wiki/${info.detail.name}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
      </nav>

      <div className=" w-full  text-white flex ">
       
      <div className="w-[150%] ">
      <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]  h-[55vh] object-cover "
          src={`https://image.tmdb.org/t/p/original/${
             info.detail.profile_path || info.detail.poster_path || info.detail.backdrop_path 
          }`}
          alt=""
        />
        <h1 className="  text-xl">dob :{info.detail.birthday}</h1>
      </div>
        
      
        <div className=" ml-[8%]">
        <h1 className="font-semibold text-4xl mb-5">{info.detail.name}</h1>
        <p className="text-xl ">{info.detail.biography.slice(0,1000)}...</p>
        <Link to={`https://en.wikipedia.org/wiki/${info.detail.name}`} className="text-xl font-semibold text-blue-600 px-3 py-2" >know more</Link>
        </div>

      </div>
    </div>
  ):(
    <Loading />
  );
};
export default Peopledetails;
