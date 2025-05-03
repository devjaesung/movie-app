import { useState, useEffect } from "react";
import { getMovieList } from "../api/getMovieList";

export const useMovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // 초기 로딩
  useEffect(() => {
    const fetchInitialMovies = async () => {
      setIsLoading(true);
      const data = await getMovieList(page);
      setMovieList(data.results);
      setIsLoading(false);
    };
    fetchInitialMovies();
  }, []);

  // 페이지 더 불러오기
  const loadMore = async () => {
    const nextPage = page + 1;
    const nextData = await getMovieList(nextPage);
    setMovieList((prev) => [...prev, ...nextData.results]);
    setPage(nextPage);
  };

  return { movieList, isLoading, loadMore };
};
