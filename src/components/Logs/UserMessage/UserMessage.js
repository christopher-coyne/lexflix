import React from "react";

export const UserMessage = ({ message }) => {
  return (
    <div className="text-right mt-2 font-oxygen">
      <p className="bg-pink text-white px-4 py-3 rounded-bl-2xl rounded-tl-2xl rounded-br-2xl rounded-tr-sm ml-auto mr-0 inline-block text-left transition-all max-w-full xs:max-w-[%85] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[50%]">
        {message}
      </p>
    </div>
  );
};
