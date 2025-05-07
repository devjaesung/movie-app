import { useEffect, useState } from "react";
import { getMovieList } from "../api/getMovieList";
import { getSearchMovies } from "../api/getMovieList";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";
import MovieCard from "../components/MovieCard";

const MainPage = () => {
  const [searchParams] = useSearchParams();
  const rawQuery = searchParams.get("query") || "";
  const debouncedQuery = useDebounce(rawQuery);
  const isSearchMode = debouncedQuery.trim() !== "";

  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      let data;

      if (isSearchMode) {
        data = await getSearchMovies(debouncedQuery);
        setMovieList(data);
      } else {
        const result = await getMovieList(1);
        setMovieList(result.results);
        setPage(1);
      }

      setIsLoading(false);
    };

    fetchMovies();
  }, [debouncedQuery]);

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    const result = await getMovieList(nextPage);
    setMovieList((prev) => [...prev, ...result.results]);
    setPage(nextPage);
  };

  return (
    <div className="flex flex-col items-center py-4">
      <div className="w-full">
        {isLoading ? (
          <p>로딩중...</p>
        ) : movieList.length === 0 ? (
          <p className="text-gray-500 text-center mt-8">검색 결과 없음</p>
        ) : (
          <MovieCard data={movieList} />
        )}
      </div>

      {!isLoading && !isSearchMode && movieList.length > 0 && (
        <button
          onClick={handleLoadMore}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer"
        >
          더보기
        </button>
      )}
    </div>
  );
};

export default MainPage;
