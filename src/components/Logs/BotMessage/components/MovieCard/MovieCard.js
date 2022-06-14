import React from "react";
import MovieInfoLine from "./components/MovieInfoLine";
import CardHeader from "../CardHeader/CardHeader";

const movieLabels = ["director", "actors", "genres", "runtime"];
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
        <a
          className="font-light  italic text-sm block"
          href="https://help.imdb.com/article/imdb/track-movies-tv/ratings-faq/G67Y87TFYYP6TWAV#"
        >
          What's this?
        </a>
      </p>
    </>
  );
};

export default MovieCard;
