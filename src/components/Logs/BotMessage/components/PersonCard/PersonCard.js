import React from "react";
import CardHeader from "../CardHeader/CardHeader";
import MovieInfoLine from "../MovieCard/components/MovieInfoLine";
import MovieLine from "./components/MovieLine";

const personLabels = ["Appears In", "Top Genre"];
const labelsToAfterInfo = {
  "Appears In": "/1000 of the top IMDB movies",
};
const labelToAttr = {
  "Appears In": "is_in",
  "Top Genre": "top genre",
};

const PersonCard = ({ person, type, open }) => {
  console.log("person : ", person);
  if (!open) {
    return <CardHeader title={person.name} />;
  }
  return (
    <>
      <CardHeader title={person.name} />
      {personLabels.map((label) => (
        <MovieInfoLine
          label={label}
          info={person[labelToAttr[label]]}
          key={label}
          afterInfo={labelsToAfterInfo[label]}
        />
      ))}
      <h6 className="font-semibold mt-2">All Movies</h6>
      <hr className="mb-2" />
      <ul className=" text-fontLightBlue">
        {person &&
          person.movies.map((movie) => {
            return <MovieLine movie={movie} />;
          })}
      </ul>
    </>
  );
};

export default PersonCard;
