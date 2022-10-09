import React from "react";
const toggleClose = (ind, setMessages, messages) => {
  const messagesCopy = [...messages];
  messagesCopy[ind] = {
    ...messages[ind],
    open: messages[ind].open ? false : true,
  };
  setMessages(messagesCopy);
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
