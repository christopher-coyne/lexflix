import React from "react";

const UserMessage = ({ message }) => {
  return (
    <div className="container text-right mt-2">
      <p className="bg-pink text-white px-4 py-3 max-w-[50%] rounded-bl-2xl rounded-tl-2xl rounded-br-2xl rounded-tr-sm ml-auto mr-0 inline-block text-left">
        {message}
      </p>
    </div>
  );
};

export default UserMessage;
