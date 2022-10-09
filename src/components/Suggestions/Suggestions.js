import React from "react";
import { useState, useContext } from "react";
import Icon from "./Icon/Icon";
import Extension from "./Extension/Extension";
import { suggestionsContext } from "../../contexts/suggestionsContext";
import {
  defaultSuggestions,
  getIntentSuggestions,
  lengthSuggestions,
  certSuggestions,
  foreignSuggestions,
  directorSuggestions,
  actorSuggestions,
  genreSuggestions,
  genreExtensions,
} from "data/suggestions";

const Suggestions = ({ metadata, submit }) => {
  const { showExtension, setShowExtension } = useContext(suggestionsContext);

  /* check to see which suggestion we should return*/
  let currentIcons = defaultSuggestions;
  let currentExtension = defaultSuggestions;

  /* set currentIcons to abridged version of icons triggered by metadata
   ** set currentExtension to full list of Icons, if they cannot fit
   */

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
  } else if (metadata.sessionState.intent.name === "moviesbydirector") {
    currentIcons = directorSuggestions;
  } else if (metadata.sessionState.intent.name === "moviesbyactor") {
    currentIcons = actorSuggestions;
  }

  // if no length, just return blank
  if (currentIcons.length === 0) {
    return <></>;
  }
  return (
    <div className="transition-all">
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
