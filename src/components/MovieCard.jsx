import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <div className="m-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-5 md:gap-10">
      {data.map((movie, index) => (
        <Link to={`/details/${movie.id}`} key={`${movie.id} - ${index}`}>
          <div
            className="border p-4 rounded-lg shadow-lg "
            // 중복된 id로 인한 에러 방지
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full sm:h-100 md:h-[400px] object-contain"
            />
            <h2 className="mt-2 font-bold">{movie.title}</h2>
            <p className="text-sm text-right">평점: {movie.vote_average}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieCard;
