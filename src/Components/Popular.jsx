import {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios"
import Cards from "../Templates/Cards";
import Topnav from "../Templates/Topnav";
import Dropdown from "../Templates/Dropdown";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
const Popular = () => {
    const navigate = useNavigate();

  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);
  document.title="developers | Popular " + category.toLocaleUpperCase();

  const Getpopular = async () => {
    try {
      const { data } = await axios.get(
        `${category}/popular?page=${page}`
      );
      if (data.results.length > 0) {
        setpopular((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      Getpopular();
    } else {
      setpage(1);
      setpopular([]);
      Getpopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="w-full h-full px-[5%] ">
      <div className="w-full flex items-center justify-between">
        <h1 className=" text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>
          {""}
          Popular
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="category"
            option={["movie", "tv"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
           
        </div>
      </div>
      <InfiniteScroll
        dataLength={popular.length}
        next={Getpopular}
        hasMore={hasmore}
        loder={<h1>Loading...</h1>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};
export default Popular;
