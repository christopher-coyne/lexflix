import React from "react";
import MovieInfoLine from "./components/MovieInfoLine";
import CardHeader from "../CardHeader/CardHeader";

const movieLabels = ["director", "stars", "genre", "length"];
const labelToAttr = {
  director: "director",
  actors: "stars",
  genres: "genre",
  runtime: "length",
};
const MovieCard = ({ movie }) => {
  return (
    <>
      <CardHeader title={movie.title} />
      <div className="flex flex-row justify-between mt-1">
        <h6 className="font-semibold text-yellow">{movie.released_year}</h6>
        <h6 className="font-semibold text-yellow border border-yellow px-1">
          {movie.certificate}
        </h6>
      </div>
      <p className="text-fontLightBlue">{movie.overview}</p>
      {movieLabels.map((label) => (
        <MovieInfoLine
          label={label}
          info={movie[labelToAttr[label]]}
          key={label}
        />
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
