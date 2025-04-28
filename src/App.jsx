// import movieList from "@/mocks/movieListData.json";
import movieDetail from "@/mocks/movieDetailData.json";
// import MovieCard from "@/components/MovieCard";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  return (
    <>
      {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-5 mt-5">
        {movieList.results.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div> */}
      <MovieDetail movieDetail={movieDetail} />
    </>
  );
};

export default App;
