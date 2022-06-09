import React from "react";

const Icon = ({ text }) => {
  if (text === "-" || text === "+") {
    return (
      <button className="text-lightPink bg-pink rounded-full h-10 w-10 font-oxygen text-2xl font-bold">
        {" "}
        {text}
      </button>
    );
  }
  return (
    <button
      className={`${
        text === "Don't Care" ? "border-yellow" : "border-pink"
      } border-2 ${
        text === "Don't Care" ? "text-yellow" : "text-pink"
      } font-ubuntu px-5 py-1 rounded-md mr-4`}
    >
      {text}
    </button>
  );
};

export default Icon;
