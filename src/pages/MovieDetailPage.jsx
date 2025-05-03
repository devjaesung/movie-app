import { useEffect } from "react";
import MovieDetail from "../components/MovieDetail";
import { useParams } from "react-router-dom";
import { useMovieDetail } from "../hooks/useMovieDetail";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { movieDetail, isLoading, setMovieId } = useMovieDetail(id);

  useEffect(() => {
    setMovieId(id); // 반드시 호출되어야 함!
  }, [id]);

  return (
    <>
      {!isLoading ? (
        <MovieDetail
          movieDetail={movieDetail}
          setMovieId={setMovieId}
          isLoading={isLoading}
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default MovieDetailPage;
