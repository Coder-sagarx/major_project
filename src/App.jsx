import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movie from "./Components/Movie";
import Tv from "./Components/Tv";
import People from "./Components/People";
import Moviedetails from "./Components/Moviedetails";
import Tvdetails from "./Components/Tvdetails";
import Peopledetails from "./Components/Peopledetails";
import Trailer from "./Templates/Trailer";
import NotFound from "./Components/NotFound";

const App = () => {
  return (
    <div className="w-screen h-full bg-[#1F1E24] flex">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Trending" element={<Trending />}></Route>
        <Route path="/popular" element={<Popular />}></Route>

        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>

        <Route path="/Tvshows" element={<Tv />} />
        <Route path="/tv/details/:id" element={<Tvdetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>

        <Route path="/People" element={<People />} />
        <Route path="/people/details/:id" element={<Peopledetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
