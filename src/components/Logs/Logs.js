import React from "react";
import BotMessage from "./BotMessage/BotMessage";
import UserMessage from "./UserMessage/UserMessage";

const Logs = ({ messages, setMessages }) => {
  if (!messages) {
    return <></>;
  }
  return (
    <>
      {messages.map((msg, ind) => {
        console.log("ind : ", ind);
        return msg.type === "user" ? (
          <UserMessage message={msg.content} key={ind} />
        ) : (
          <BotMessage
            message={msg.content}
            card={msg.card}
            key={ind}
            ind={ind}
            open={msg.open}
            setMessages={setMessages}
            messages={messages}
          />
        );
      })}
    </>
  );
};

export default Logs;
