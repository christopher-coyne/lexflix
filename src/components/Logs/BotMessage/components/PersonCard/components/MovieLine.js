import React from "react";

const MovieLine = ({ movie }) => {
  return (
    <>
      <li className="flex justify-between">
        <a href={movie.link} className="inline-block">
          {movie.title}
        </a>{" "}
        <span className="font-semibold ">{movie.imdb_rating}/10</span>
      </li>
    </>
  );
};

export default MovieLine;
