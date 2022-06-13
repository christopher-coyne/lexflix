import React from "react";

const MovieLine = ({ movie }) => {
  return (
    <>
      <h6>All movies</h6>
      <li>
        <a href={movie.link}>{movie.title}</a> <span>{movie.rating}/10</span>
      </li>
    </>
  );
};

export default MovieLine;
