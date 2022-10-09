import React from "react";
import { Logs } from "components/Logs";
import { Navbar } from "components/Navbar";
import { Submit } from "components/Submit";
import { IntroCard } from "components/IntroCard";
import { useState, useEffect, useRef, useContext } from "react";
import "./Chatbot.css";
import getMessage from "./getMessage";
import { suggestionsContext } from "contexts/suggestionsContext";
import { useSendMessage } from "hooks/useSendMessage";

const Chatbot = ({ setMessages, messages, metadata, setMetadata }) => {
  const { setShowExtension } = useContext(suggestionsContext);
  // const [oldUserInput, setOldUserInput] = useState("");
  const messagesEndRef = useRef(null);

  /*
   *  tracks what last user input was so chatbot can easily retrieve and send it
   *  to the backend, to get the bot message.
   */
  let oldUserInput = useRef("");

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  useSendMessage(messages, setMessages, setMetadata, metadata, oldUserInput);
  useEffect(scrollToBottom, [messages]);

  const submitHandler = (e, icon = null) => {
    if (e) {
      e.preventDefault();
    }

    // if submitted by clicking a button (icon) use that button's exact text as input
    if (icon) {
      oldUserInput.current = icon;
    } else {
      oldUserInput.current = e.target.input.value;
      e.target.input.value = "";
    }

    setMessages([
      ...messages,
      { content: oldUserInput.current.slice(), type: "user" },
      { content: "...", type: "bot" },
    ]);

    setShowExtension(false);
  };
  return (
    <>
      <div className="bg-gradient-to-b from-midnightPurple to-gradientEndPurple h-screen flex flex-col justify-between items-center relative">
        <Navbar />
        <div className=" h-[60%] w-[100%] overflow-y-scroll lg:h-[70%]">
          <div className="w-11/12  xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 mx-auto max-w-screen-lg ">
            <IntroCard />
            <Logs messages={messages} setMessages={setMessages} />
            <div ref={messagesEndRef} />
          </div>
        </div>
        <Submit metadata={metadata} submitHandler={submitHandler} />
      </div>
    </>
  );
};

export default Chatbot;
