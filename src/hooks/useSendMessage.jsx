import { useEffect } from "react";
import getMessage from "screens/Chatbot/getMessage";

export const useSendMessage = (
  messages,
  setMessages,
  setMetadata,
  metadata,
  oldUserInput
) => {
  console.log("messages outside of useEffect : ", messages);
  useEffect(() => {
    console.log("messages : ", messages);
    // Return early, if this is the first render:
    if (!messages.filter((msg) => msg.content === "...").length) {
      return;
    }

    /*
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
    */
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
  }, [messages, setMessages, setMetadata, metadata, oldUserInput]);
};
