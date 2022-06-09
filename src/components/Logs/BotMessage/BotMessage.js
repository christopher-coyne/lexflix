import React from "react";

const BotMessage = ({ message }) => {
  return (
    <div className="container text-left font-oxygen">
      <p className="bg-messageDarkBlue text-fontLightBlue px-4 py-3 max-w-[50%] rounded-bl-2xl rounded-tr-2xl rounded-br-2xl rounded-tl-sm ml-auto mr-0 inline-block text-left">
        {message}
      </p>
    </div>
  );
};

/* bg-darkPurple text-fontLightBlue w-4/6 px-5 py-5 rounded-bl-2xl rounded-tr-2xl rounded-br-2xl rounded-tl-md */
export default BotMessage;
