import React from "react";
import MovieCard from "../components/MovieCard";
import { useMovieList } from "../hooks/useMovieList";

const MainPage = () => {
  const { movieList, isLoading, loadMore } = useMovieList();

  return (
    <>
      <div className="flex flex-col items-center py-4">
        <div className="w-full">
          {!isLoading ? <MovieCard data={movieList} /> : <p>로딩중...</p>}
        </div>

        {!isLoading ? (
          <button
            onClick={loadMore}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer"
          >
            더보기
          </button>
        ) : null}
      </div>
    </>
  );
};

export default MainPage;
