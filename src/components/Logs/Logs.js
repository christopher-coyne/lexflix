import React from "react";
import BotMessage from "./BotMessage/BotMessage";
import UserMessage from "./UserMessage/UserMessage";

const Logs = ({ messages }) => {
  if (!messages) {
    return <></>;
  }
  return (
    <>
      {messages.map((msg, ind) => {
        return msg.type === "user" ? (
          <UserMessage message={msg.content} key={ind} />
        ) : (
          <BotMessage message={msg.content} card={msg.card} key={ind} />
        );
      })}
    </>
  );
};

export default Logs;
