import React from "react";
import Logs from "../../components/Logs/Logs";
import Navbar from "../../components/Navbar";
import Submit from "../../components/Submit/Submit";
import IntroCard from "../../components/IntroCard/IntroCard";
import { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import getMessage from "./getMessage";

const Chatbot = ({ setMessages, messages, metadata, setMetadata }) => {
  const [userInput, setUserInput] = useState("");
  // const [oldUserInput, setOldUserInput] = useState("");
  const messagesEndRef = useRef(null);
  let oldUserInput = useRef("");

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  useEffect(() => {
    // Return early, if this is the first render:
    let placeHolder = false;
    for (const msg of messages) {
      if (msg.content === "...") {
        placeHolder = true;
      }
    }

    if (placeHolder === false) {
      console.log("placeholder is false!");
      return;
    }
    // Paste code to be executed on subsequent renders:
    else {
      console.log(
        "placeholder detected, going to update, olduserinput : ",
        oldUserInput.current
      );
      let oldUserInputCopy = oldUserInput.current.slice();

      // EXCEPTION: if don't care and prev bot message was for length,
      // send max length
      if (oldUserInputCopy === "Don't Care") {
        const allBotMessages = messages.filter(
          (message) => message.type === "bot"
        );
        console.log("most recent bot msg", allBotMessages);
        if (
          allBotMessages[allBotMessages.length - 2].content.includes(
            "max length"
          )
        ) {
          // 326 = max movie length
          console.log("dont care for max length");
          oldUserInputCopy = "321";
        }
      }

      oldUserInput.current = "";
      const newMessage = {
        text: oldUserInputCopy.toLowerCase(),
        sessionId: metadata["sessionId"],
        sessionStarted: metadata["sessionStarted"],
        sessionState: metadata["sessionState"],
      };
      // setUserInput("");
      console.log("sending new message... ", newMessage);
      getMessage(newMessage, setMessages, messages, setMetadata, metadata);
    }
  }, [messages, setMessages, setMetadata, metadata]);

  useEffect(scrollToBottom, [messages]);
  let newUserMessage = "";
  const updateInput = (e) => {
    setUserInput(e.target.value);
    // setOldUserInput(e.target.value);
  };
  const submitHandler = (e, icon = null) => {
    if (e) {
      e.preventDefault();
    }

    if (icon) {
      oldUserInput.current = icon;
    } else {
      oldUserInput.current = userInput.slice();
    }
    console.log("updating old user input! : ", oldUserInput.current);
    // setOldUserInput(userInput.slice());
    setUserInput("");
    console.log("updating old user input! : ", oldUserInput.current);

    setMessages([
      ...messages,
      { content: oldUserInput.current.slice(), type: "user" },
      { content: "...", type: "bot" },
    ]);

    /* take this out when fully testing */
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
        <Submit
          metadata={metadata}
          submitHandler={submitHandler}
          userInput={userInput}
          updateInput={updateInput}
        />
      </div>
    </>
  );
};

export default Chatbot;

/*
sm:border-yellow md:border-fontDarkBlue lg:border-yellow xl:border-white
*/
