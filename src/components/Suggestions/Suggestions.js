import React from "react";
import Icon from "./Icon/Icon";

const certSuggestions = ["G", "PG", "PG-13", "R", "Don't Care"];
const genreSuggestions = ["Action", "Fantasy", "Don't Care"];

const Suggestions = () => {
  const currentIcons = certSuggestions;
  return (
    <div className="border-white border-4">
      {currentIcons.concat("+").map((icon) => (
        <Icon text={icon} key={icon} />
      ))}
    </div>
  );
};

export default Suggestions;
