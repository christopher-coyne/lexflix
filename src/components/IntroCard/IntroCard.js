import React from "react";

const IntroCard = () => {
  return (
    <div className="container justify-between flex flex-row bg-gradient-to-r from-pink to-gradientEndPink mx-auto text-white rounded-2xl w-full mb-8 px-2 py-5 gap-2 font-ubuntu">
      <h1 className="border-4 border-white rounded-tr-2xl rounded-bl-2xl m-auto text-5xl inline-block px-8 py-4">
        LexFlix
      </h1>
      <div className="container w-[60%] mx-auto text-xl">
        <p>
          A movie chatbot powered by Amazon Lex. The data is taken from IMDB's
          list of top 1000 movies of all time.
        </p>
        <ul className="container flex flex-row font-semibold mt-2">
          <li>
            <a href="www.google.com">Github</a>
          </li>
          <li>
            <a href="www.google.com" className="ml-3">
              Contact
            </a>
          </li>
          <li>
            <a href="www.google.com" className="ml-3">
              Dataset
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IntroCard;
