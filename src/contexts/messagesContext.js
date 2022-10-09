import React, { useState } from "react";

export const messagesContext = React.createContext({
  setMessages: () => null,
  messages: [],
});

export const MessagesContext = ({ children }) => {
  const [messages, setMessages] = useState([
    {
      content:
        "Hello, I’m the Lexflix bot. I can give you movie recommendations, or show you IMDB’s top movies with a certain director or actor. How can I help you today?",
      type: "bot",
    },
  ]);
  return (
    <messagesContext.Provider value={{ setMessages, messages }}>
      {children}
    </messagesContext.Provider>
  );
};
