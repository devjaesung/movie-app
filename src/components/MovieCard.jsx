import React from "react";

const MovieCard = ({ data }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title}
        className="w-full h-80 object-cover"
      />
      <h2 className="mt-2 font-bold">{data.title}</h2>
      <p className="text-sm text-right">평점: {data.vote_average}</p>
    </div>
  );
};

export default MovieCard;
