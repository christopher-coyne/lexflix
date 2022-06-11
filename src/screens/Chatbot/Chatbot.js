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
      const oldUserInputCopy = oldUserInput.current.slice();
      oldUserInput.current = "";
      const newMessage = {
        text: oldUserInputCopy,
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

    /*
    const newMessage = {
      text: userInput,
      sessionId: metadata["sessionId"],
      sessionStarted: metadata["sessionStarted"],
      sessionState: metadata["sessionState"],
    };
    console.log("sending new message... ", newMessage);
    */

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
        console.log("returned from axios... message : ", messages);
        console.log(
          "session attributes : ",
          parsed.sessionState.sessionAttributes
        );
        setMessages([...messages, { content: value.data.body, type: "bot" }]);

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
      <div className="bg-gradient-to-b from-midnightPurple to-gradientEndPurple h-screen flex flex-col border-yellow border-4 justify-between items-center relative">
        <Navbar />
        <div className="border-4 border-yellow h-[80%] w-[100%] overflow-y-scroll">
          <div className="container border-4 border-white xl:w-7/12 lg:w-8/12 md:w-9/12 mx-auto max-w-screen-lg sm:border-yellow md:border-fontDarkBlue lg:border-yellow xl:border-white">
            <IntroCard />
            <Logs messages={messages} />
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
