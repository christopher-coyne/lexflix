import React from "react";
// import {useState} from 'React'
import BotLogo from "./components/BotLogo/BotLogo";
import MovieCard from "./components/MovieCard/MovieCard";
import PersonCard from "./components/PersonCard/PersonCard";
/*
const BotMessage = ({ message }) => {
  return (
    <div className="container text-left font-oxygen">
      <p className="bg-messageDarkBlue text-fontLightBlue pr-4 pl-6 py-3 max-w-[50%] rounded-bl-2xl rounded-tr-2xl rounded-br-2xl rounded-tl-sm ml-auto mr-0 inline-block text-left relative">
        <BotLogo />
        {message}
      </p>
    </div>
  );
};
*/

const BotMessage = ({ message, card }) => {
  const containerClassname =
    "bg-messageDarkBlue inline-block text-fontLightBlue pr-4 pl-6 py-3 max-w-full xs:max-w-[%85] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[50%] rounded-bl-2xl rounded-tr-2xl rounded-br-2xl rounded-tl-sm  text-left relative";

  /* if this is a card, return within a div with classname
   * otherwise, return a paragraph, since only text will be shown
   */
  return (
    <div className="text-left font-oxygen">
      {card === "getrecs" ? (
        <div className={containerClassname}>
          {" "}
          <BotLogo />
          <MovieCard movie={message} />
        </div>
      ) : card === "moviesbydirector" || card === "moviesbyactor" ? (
        <div className={`${containerClassname} w-full`}>
          {" "}
          <BotLogo />
          <PersonCard person={message} type={card} />
        </div>
      ) : (
        <p className={containerClassname}>
          <BotLogo />
          {message}
        </p>
      )}
      <h6 className="text-fontDarkBlue">12:00 pm</h6>
    </div>
  );
};

/* bg-darkPurple text-fontLightBlue w-4/6 px-5 py-5 rounded-bl-2xl rounded-tr-2xl rounded-br-2xl rounded-tl-md */
export default BotMessage;
