import React from "react";
import { useState } from "react";
import Icon from "./Icon/Icon";
import Extension from "./Extension/Extension";

const defaultSuggestions = [];
const getIntentSuggestions = [
  "Movie Recommendations",
  "Movies by Director",
  "Movies by Actors",
];
const lengthSuggestions = ["90 minutes", "120 minutes", "Don't Care"];
const certSuggestions = ["G", "PG", "PG-13", "R", "Don't Care"];
const foreignSuggestions = ["Foreign", "Domestic", "Don't Care"];

const genreSuggestions = ["Comedy", "Fantasy", "Don't Care"];
const genreExtensions = [
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
  const [showExtension, setShowExtension] = useState(false);
  /* check to see which suggestion we should return*/
  // let currentIcons = genreSuggestions.slice(0, 3);
  // let currentExtension = genreSuggestions;

  let currentIcons = defaultSuggestions;
  let currentExtension = defaultSuggestions;

  /* set currentIcons to abridged version of icons triggered by metadata
   ** set currentExtension to full list of Icons, if they cannot fit
   */

  console.log("info from suggestions : ", metadata.sessionState.intent);
  if (
    !metadata.sessionState.intent ||
    !metadata.sessionState.intent.name ||
    metadata.sessionState.intent.name === "FallbackIntent"
  ) {
    currentIcons = getIntentSuggestions;
  } else if (metadata.sessionState.intent.name === "getrecs") {
    if (metadata.sessionState.dialogAction.type === "ElicitSlot") {
      switch (metadata.sessionState.dialogAction.slotToElicit) {
        case "genre":
          currentIcons = genreSuggestions;
          currentExtension = genreExtensions;
          break;
        case "mlength":
          currentIcons = lengthSuggestions;
          break;
        case "upperboundcert":
          currentIcons = certSuggestions;
          break;
        case "foreign":
          currentIcons = foreignSuggestions;
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
      {showExtension ? (
        <Extension
          currentExtension={currentExtension}
          submit={(e = null, text) => {
            setShowExtension(false);
            submit(e, text);
          }}
        />
      ) : (
        currentIcons.map((icon) => (
          <Icon text={icon} key={icon} submit={submit} />
        ))
      )}

      {currentExtension.length && (
        <Icon
          text="+"
          showExtension={showExtension}
          submit={() => {
            showExtension ? setShowExtension(false) : setShowExtension(true);
          }}
        />
      )}
    </div>
  );
};

export default Suggestions;
