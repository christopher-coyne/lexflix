import React from "react";
import Logs from "../../components/Logs/Logs";
import Navbar from "../../components/Navbar";
import Submit from "../../components/Submit/Submit";
import IntroCard from "../../components/IntroCard/IntroCard";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Chatbot.css";

const Chatbot = ({ setMessages, messages, metadata, setMetadata }) => {
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  useEffect(scrollToBottom, [messages]);
  let newUserMessage = "";
  const updateInput = (e) => {
    setUserInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const newMessage = {
      text: userInput,
      sessionId: metadata["sessionId"],
      sessionStarted: metadata["sessionStarted"],
      sessionState: metadata["sessionState"],
    };
    console.log("sending new message... ", newMessage);
    /*
    axios
      .post(
        "https://n9i31tpdha.execute-api.us-east-1.amazonaws.com/v1/chatbot",
        newMessage
      )
      .then((value) => {
        console.log("value returned : ", value);

        // 'mlength': {'value': {'originalValue': 'abc', 'resolvedValues': []}}
        const parsed = JSON.parse(value.data.body);
        for (const slot in parsed.sessionState.intent.slots) {
          if (parsed.sessionState.intent.slots[slot] == null) {
            parsed.sessionState.intent.slots[slot] = {};
          }
          if (
            parsed.sessionState.intent.slots[slot].value &&
            !parsed.sessionState.intent.slots[slot].value.interpretedValue
          ) {
            parsed.sessionState.intent.slots[slot] = {};
          }
        }

        console.log("fixed parsed : ", parsed);
        console.log(
          "session attributes : ",
          parsed.sessionState.sessionAttributes
        );
        setMessages([...messages, { content: value.data.body, type: 'bot' }]);

        // if we have fulfilled getrecs (or anything...), then reset
        if (parsed.sessionState.intent.state === "Fulfilled") {
          console.log("fulfilled! reset");
          setMetadata({
            ...metadata,
            sessionState: {
              intent: { name: "FallbackIntent", slots: {} },
              sessionAttributes: parsed.sessionState.sessionAttributes,
            },
            sessionStarted: true,
          });
        } else {
          setMetadata({
            ...metadata,
            sessionState: parsed.sessionState,
            sessionStarted: true,
          });
        }
      });
      */

    newUserMessage = userInput.slice();

    setMessages([
      ...messages,
      { content: newUserMessage, type: "user" },
      { content: "yeah that makes sense bro", type: "bot" },
    ]);

    /* take this out when fully testing */

    setUserInput("");
  };
  return (
    <>
      <div className="bg-gradient-to-b from-midnightPurple to-gradientEndPurple h-screen flex flex-col border-yellow border-4 justify-between items-center">
        <Navbar />
        <div className="container border-4 border-yellow h-[80%] w-12/12 overflow-y-auto">
          <div className="container border-4 border-white h-[100%] w-7/12 mx-auto">
            <IntroCard />
            <Logs messages={messages} />
            <div ref={messagesEndRef} />
          </div>
        </div>
        <Submit
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
    <>
      <div className="bg-gradient-to-b from-midnightPurple to-gradientEndPurple h-screen relative oxygen">
        <Navbar />
        <div className="container border-4 border-yellow h-[80%] w-11/12 overflow-y-auto absolute left-0 right-0 mx-auto my-auto top-10">
          <div className="container border-4 border-white h-[100%] w-7/12 mx-auto">
            <IntroCard />
            <div className="yellow">
              <Logs messages={messages} />
            </div>
          </div>
        </div>
        <Submit
          submitHandler={submitHandler}
          userInput={userInput}
          updateInput={updateInput}
        />
      </div>
    </>
    */

/*
    <>
      <div className="bg-gradient-to-b from-midnightPurple to-gradientEndPurple h-screen overflow-y-hidden flex border-yellow border-4">
        <Navbar />
        <div className="container h-[80%] w-11/12 overflow-y-auto relative mx-auto my-10 border-yellow border-4">
          <div className="container w-7/12 mx-auto border-white border-4">
            <IntroCard />
            <Logs messages={messages} />
            <div ref={messagesEndRef} />
          </div>
        </div>
        <Submit
          submitHandler={submitHandler}
          userInput={userInput}
          updateInput={updateInput}
        />
      </div>
    </>
*/
