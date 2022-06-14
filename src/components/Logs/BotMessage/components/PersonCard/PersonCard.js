import React from "react";
import CardHeader from "../CardHeader/CardHeader";
import MovieInfoLine from "../MovieCard/components/MovieInfoLine";
import MovieLine from "./components/MovieLine";

const personLabels = ["Appears In", "Top Genre"];
const labelToAttr = {
  "Appears In": "is_in",
  "Top Genre": "top_genre",
};

const PersonCard = ({ person, type }) => {
  console.log("person : ", person);
  return (
    <>
      <CardHeader title={person.name} />
      {personLabels.map((label) => (
        <MovieInfoLine
          label={label}
          info={person[labelToAttr[label]]}
          key={label}
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
