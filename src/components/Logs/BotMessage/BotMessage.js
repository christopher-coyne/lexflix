import React from "react";
// import {useState} from 'React'
import { BotLogo } from "./components/BotLogo";
import { MovieCard } from "./components/MovieCard";
import { PersonCard } from "./components/PersonCard";

export const BotMessage = ({
  message,
  card,
  open,
  setMessages,
  messages,
  ind,
}) => {
  const containerClassname =
    "bg-messageDarkBlue inline-block text-fontLightBlue pr-4 pl-6 py-3 max-w-full xs:max-w-[%85] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[50%] rounded-bl-2xl rounded-tr-2xl rounded-br-2xl rounded-tl-sm  text-left relative my-5";

  /* if this is a card, return within a div with classname
   * otherwise, return a paragraph, since only text will be shown
   */
  return (
    <div className="text-left font-oxygen">
      {card === "getrecs" ? (
        <div className={`${containerClassname} w-full`}>
          {" "}
          <BotLogo />
          <MovieCard
            movie={message}
            open={open}
            setMessages={setMessages}
            ind={ind}
            messages={messages}
          />
        </div>
      ) : card === "moviesbydirector" || card === "moviesbyactor" ? (
        <div className={`${containerClassname} w-full`}>
          {" "}
          <BotLogo />
          <PersonCard
            person={message}
            type={card}
            open={open}
            setMessages={setMessages}
            ind={ind}
            messages={messages}
          />
        </div>
      ) : (
        <p className={containerClassname}>
          <BotLogo />
          {message}
        </p>
      )}
    </div>
  );
};
