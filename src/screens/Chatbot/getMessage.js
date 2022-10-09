import axios from "axios";

const newContentDict = {
  getrecs:
    "Sorry, but we did not find any movie results that matched your query. After all, there are only 1000 movies in this database. Try putting a higher rating threshold (r) or making the max runtime a higher value",
  getmoviesbyactor: "Sorry, but we did not find any directors with that name",
  getmoviesbydirector:
    "Sorry, but we did not find any directors with that name",
};

const getrecsSetMessages = (index, msgCopy, parsed, messages, type) => {
  let newContent = newContentDict[type];
  let cards = [];
  let isCard = false;

  /* change from default values is we get any results */
  cards = JSON.parse(parsed.messages.content);
  if (cards.length >= 1) {
    newContent =
      "Here are your results! Click on any one of them in order to expand or collapse";
    isCard = false;
  } else {
    newContent = newContentDict[type];
    isCard = false;
  }
  msgCopy[index] = {
    ...messages[index],
    content: newContent,
    card: isCard,
  };

  // just want to test with all cards open at first
  cards.forEach((card, ind) => {
    ind = 0;
    msgCopy.push({
      content: card,
      card: type,
      open: ind === 0 ? true : false,
    });
  });

  msgCopy.push({
    content: "Is there anything else you would like to do?",
    card: false,
  });
  return msgCopy;
};

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
      // console.log("got message : ", value);

      /* clean data. json may have "none" instead of a {} */
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

      /*
      console.log(
        "session attributes : ",
        parsed.sessionState.sessionAttributes
      );
      */

      // get the last message in state with a ... (loading), create a new array,
      const intentFinished =
        parsed.sessionState.intent.state === "Fulfilled" &&
        (parsed.sessionState.intent.name === "getrecs" ||
          parsed.sessionState.intent.name === "moviesbydirector" ||
          parsed.sessionState.intent.name === "moviesbyactor");

      const index = messages.findIndex((msg) => {
        return msg.content === "..." && msg.type === "bot";
      });
      const msgCopy = [...messages];

      if (intentFinished) {
        getrecsSetMessages(
          index,
          msgCopy,
          parsed,
          messages,
          parsed.sessionState.intent.name
        );
      } else {
        msgCopy[index] = {
          ...messages[index],
          content: parsed.messages.content,
          card: false,
        };
      }

      setMessages(msgCopy);

      // if we have fulfilled getrecs (or anything...), then reset metadata
      if (parsed.sessionState.intent.state === "Fulfilled") {
        // console.log("fulfilled! reset");
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
