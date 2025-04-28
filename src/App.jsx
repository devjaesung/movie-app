import { Routes, Route } from "react-router-dom";
import movieList from "@/mocks/movieListData.json";
import movieDetail from "@/mocks/movieDetailData.json";
import MovieCard from "@/components/MovieCard";
import MovieDetail from "@/components/MovieDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieCard data={movieList.results} />} />
        <Route
          path="/details"
          element={<MovieDetail movieDetail={movieDetail} />}
        />
      </Routes>
    </>
  );
};

export default App;
