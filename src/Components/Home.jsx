import Sidenav from "../Templates/Sidenav";
import Topnav from "../Templates/Topnav";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import Header from "../Templates/Header";
import Dropdown from "../Templates/Dropdown";
import Horizontalcards from "../Templates/Horizontalcards";
import Loading from "./Loading";
const Home = () => {
  document.title = "developers...| Homepage";

  const [wallpaper, setwallpaper] = useState(null);
  const [Trending, setTrending] = useState(null);
  const [category, setcategory] = useState("all");

  const Getheaderwallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    GetTrending();
    !wallpaper && Getheaderwallpaper();
  }, [category]);

  return wallpaper && Trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden ">
        <Topnav />
        <Header data={wallpaper} />

        <div className=" flex justify-between p-5">
          <h1 className="font-semibold text-3xl text-white">Trending</h1>
          <Dropdown
            title="Filter"
            option={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>

        <Horizontalcards data={Trending} />
      </div>
    </>
  ) : (
    <Loading/>
  );
};
export default Home;
