import React from "react";
const toggleClose = (ind, setMessages, messages) => {
  console.log("header : messages , ", messages);
  console.log("header : ind : ", ind);
  console.log("header messages before : ", messages);
  const messagesCopy = [...messages];
  messagesCopy[ind] = {
    ...messages[ind],
    open: messages[ind].open ? false : true,
  };
  console.log("header messages after : ", messages);
  setMessages(messagesCopy);
  setTimeout(() => {
    console.log("Delayed for 1 second.");
    console.log("messages after set timeotu : ", messages);
  }, "1000");
};
export const CardHeader = ({ title, ind, setMessages, messages }) => {
  return (
    <>
      <button
        className="text-yellow border border-yellow w-[100%] font-ubuntu font-semibold flex items-stretch justify-between gap-2"
        onClick={() => toggleClose(ind, setMessages, messages)}
      >
        <div className=" w-[15%] bg-yellow border border-yellow my-0">
          &nbsp;
        </div>
        <div className="text-left w-[100%]">{title}</div>
      </button>
    </>
  );
};
