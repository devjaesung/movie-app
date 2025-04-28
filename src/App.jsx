import data from "@/mocks/movieListData.json";
import MovieCard from "@/components/MovieCard";

const App = () => {
  return (
    <>
      <div className="my-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-5 mt-5">
        {data.results.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
    </>
  );
};

export default App;
