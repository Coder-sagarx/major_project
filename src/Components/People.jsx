import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "../Templates/Cards";
import Topnav from "../Templates/Topnav";
import Dropdown from "../Templates/Dropdown";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
    const navigate = useNavigate();
  
    const [category, setcategory] = useState("popular");
    const [people, setpeople] = useState([]);
    const [page, setpage] = useState(1);
    const [hasmore, sethasmore] = useState(true);
    document.title = " Trending | People " + category.toLocaleUpperCase();
  
    const Getpeople = async () => {
      try {
        const { data } = await axios.get(`/person/${category}?page=${page}`);
        if (data.results.length > 0) {
          setpeople((prev) => [...prev, ...data.results]);
          setpage(page + 1);
        } else {
          sethasmore(false);
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
  
    const refreshHandler = () => {
      if (people.length === 0) {
        Getpeople();
      } else {
        setpage(1);
        setpeople([]);
        Getpeople();
      }
    };
  
    useEffect(() => {
      refreshHandler();
    }, []);
  
    return people.length > 0 ? (
      <div className="w-full h-full px-[5%] ">
        <div className="w-full flex items-center justify-between">
          <h1 className=" text-2xl font-semibold text-zinc-400">
            <i
              onClick={() => navigate(-1)}
              className="hover:text-[#6556cd] ri-arrow-left-line"
            ></i>
            {""}
            People
          </h1>
          <div className="flex items-center w-[80%]">
            <Topnav />
            
            <div className="w-[2%]"></div>
          </div>
        </div>
        <InfiniteScroll
          dataLength={people.length}
          next={Getpeople}
          hasMore={hasmore}
          loder={<h1>Loading...</h1>}
        >
          <Cards data={people} title="people" />
        </InfiniteScroll>
      </div>
    ) : (
      <Loading />
    );
  };
  export default People;
  