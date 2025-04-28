import React from "react";

const MovieCard = ({ data }) => {
  return (
    <div className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((movie) => (
        <div className="border p-4 rounded-lg shadow-lg" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-100 object-cover"
          />
          <h2 className="mt-2 font-bold">{movie.title}</h2>
          <p className="text-sm text-right">평점: {movie.vote_average}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
