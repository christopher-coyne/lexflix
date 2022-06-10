import React from "react";

const Icon = ({ text, submit, showExtension }) => {
  if (text === "-" || text === "+") {
    return (
      <button
        className="text-lightPink bg-pink rounded-full h-10 w-10 font-oxygen text-2xl font-bold my-2 hover:shadow-lg hover:shadow-pink/100 hover:text-white"
        onClick={submit}
      >
        {showExtension ? "-" : "+"}
      </button>
    );
  }
  const bgcolor = text === "Don't Care" ? "bg-yellow" : "bg-pink";
  const textcolor = text === "Don't Care" ? "text-yellow" : "text-pink";
  const bordercolor = text === "Don't Care" ? "border-yellow" : "border-pink";
  return (
    <button
      onClick={() => {
        submit(null, text);
      }}
      className={`${textcolor} ${bordercolor}  relative group border font-oxygen px-5 py-2 rounded-md mr-4 my-2 overflow-hidden`}
    >
      <span
        className={`${bgcolor} absolute group-hover:w-full transition-all ease-out duration-300 w-0 h-full left-0 top-0`}
      ></span>
      <span className="relative group-hover:text-white">{text}</span>
    </button>
  );
};

export default Icon;

/* border font-oxygen px-5 py-2 rounded-md mr-4 my-2 */
