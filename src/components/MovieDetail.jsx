import React from "react";

const MovieDetail = ({ movieDetail }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full sm:max-w-full md:max-w-1/3 h-screen">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
          alt={movieDetail.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white mb-5">
          <h1 className="text-2xl font-bold">{movieDetail.title}</h1>
          <p>평점: {movieDetail.vote_average}</p>
        </div>
        <div>
          <div className="px-2">
            <p className="text-right text-sm text-gray-500 mb-6">
              장르: {movieDetail.genres?.map((genre) => genre.name).join(", ")}
            </p>
            <p>{movieDetail.overview ?? "정보 없음"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
