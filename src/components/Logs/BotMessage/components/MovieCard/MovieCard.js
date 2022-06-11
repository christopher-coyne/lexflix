import React from "react";
import MovieInfoLine from "./components/MovieInfoLine";

const movieLines = ["director", "stars", "genre", "length"];
const MovieCard = ({ movie }) => {
  return (
    <>
      <button className="text-yellow border text-left border-yellow w-[100%] font-ubuntu font-semibold block">
        <div className="h-full w-10 bg-yellow border border-yellow inline-block my-0">
          &nbsp;
        </div>
        {movie.title}
      </button>
      <div className="flex flex-row justify-between mt-1">
        <h6 className="font-semibold text-yellow">{movie.released_year}</h6>
        <h6 className="font-semibold text-yellow border border-yellow px-1">
          {movie.certificate}
        </h6>
      </div>
      <p className="text-fontLightBlue">{movie.overview}</p>
      {movieLines.map((line) => (
        <MovieInfoLine label={line} info={movie[line]} />
      ))}
      <a href={`${movie.link}`}> Link to IMDB Page </a>
      <p className="my-2 font-bold text-fontLightBlue">
        IMDB Rating:{" "}
        <span className="border-2 border-fontLightBlue px-2 rounded-sm mx-3">
          {movie.imdb_rating}/10
        </span>
        <h6 className="font-light  italic text-sm">What's this?</h6>
      </p>
    </>
  );
};

export default MovieCard;
