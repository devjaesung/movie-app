import { useState, useEffect } from "react";
import { getMovieDetail } from "../api/getMovieDetail";

export const useMovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [movieId, setMovieId] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      if (!movieId) return;
      setIsLoading(true);
      try {
        const data = await getMovieDetail(movieId);
        setMovieDetail(data);
      } catch (err) {
        console.error("영화 디테일 페이지 데이터 오류:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetail();
  }, [movieId]);

  return { movieDetail, isLoading, setMovieId };
};
