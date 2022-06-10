import React from "react";

const Icon = ({ text, submit, showExtension }) => {
  if (text === "-" || text === "+") {
    return (
      <button
        className="text-lightPink bg-pink rounded-full h-10 w-10 font-oxygen text-2xl font-bold my-2"
        onClick={submit}
      >
        {showExtension ? "-" : "+"}
      </button>
    );
  }
  const color = text === "Don't Care" ? "yellow" : "pink";
  return (
    <button
      onClick={() => {
        submit(null, text);
      }}
      className={`${text === "Don't Care" ? "border-yellow" : "border-pink"} ${
        text === "Don't Care" ? "text-yellow" : "text-pink"
      }  relative group border font-oxygen px-5 py-2 rounded-md mr-4 my-2 overflow-hidden`}
    >
      <span className="absolute group-hover:w-full transition-all ease-out duration-300 w-0 h-full bg-pink left-0 top-0"></span>
      <span className="relative group-hover:text-white">{text}</span>
    </button>
  );
};

export default Icon;

/* border font-oxygen px-5 py-2 rounded-md mr-4 my-2 */
