import React from "react";
import axios from "axios";

const getMessage = (
  newMessage,
  setMessages,
  messages,
  setMetadata,
  metadata
) => {
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

      //setMessages([...messages, { content: value.data.body, type: "bot" }]);
      const index = messages.findIndex((msg) => {
        return msg.content === "..." && msg.type === "bot";
      });
      const msgCopy = [...messages];
      msgCopy[index] = { ...messages[index], content: value.data.body };
      setMessages(msgCopy);

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
};

export default getMessage;
