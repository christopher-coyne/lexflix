import React from "react";
import Icon from "./Icon/Icon";

const defaultSuggestions = [];
const lengthSuggestions = ["Don't Care"];
const certSuggestions = ["G", "PG", "PG-13", "R", "Don't Care"];
const genreSuggestions = [
  "comedy",
  "history",
  "war",
  "thriller",
  "drama",
  "music",
  "western",
  "action",
  "animation",
  "biography",
  "sci-fi",
  "mystery",
  "fantasy",
  "family",
  "adventure",
  "crime",
  "sport",
  "horror",
  "romance",
  "musical",
  "film-noir",
  "Don't Care",
];

const Suggestions = ({ metadata, submit }) => {
  /* check to see which suggestion we should return*/
  let currentIcons = defaultSuggestions;
  if (
    metadata.sessionState.intent &&
    metadata.sessionState.intent.name === "getrecs"
  ) {
    if (metadata.sessionState.dialogAction.type === "ElicitSlot") {
      switch (metadata.sessionState.dialogAction.slotToElicit) {
        case "genre":
          currentIcons = genreSuggestions.slice(0, 3);
          break;
        case "mlength":
          currentIcons = lengthSuggestions;
          break;
        case "upperboundcert":
          currentIcons = certSuggestions;
          break;
        case "lowerboundcert":
          currentIcons = certSuggestions;
          break;
        default:
          currentIcons = defaultSuggestions;
      }
    }
  }

  // if no length, just return blank
  if (currentIcons.length === 0) {
    return <></>;
  }
  console.log("metadata : ", metadata);
  return (
    <div className="border-white border-4">
      {currentIcons.concat("+").map((icon) => (
        <Icon text={icon} key={icon} submit={submit} />
      ))}
    </div>
  );
};

export default Suggestions;
