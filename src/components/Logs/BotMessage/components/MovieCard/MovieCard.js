import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <>
      <h1 className="text-yellow border-2 border-yellow w-[%100] font-ubuntu font-semibold p-2">
        <div className="w-4 h-full bg-yellow"></div>
        {movie.title}
      </h1>
    </>
  );
};

export default MovieCard;
