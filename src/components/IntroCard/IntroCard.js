import React from "react";

export const IntroCard = () => {
  return (
    <div className="justify-between items-center flex lg:flex-row bg-gradient-to-r from-pink to-gradientEndPink text-white rounded-2xl w-full mb-8 px-4 py-5 gap-4 xl:gap-14 font-ubuntu flex-col">
      <div className="border-4 border-white rounded-tr-2xl rounded-bl-2xl text-5xl inline-block px-8 mx-auto xl:py-4 lg:py-8 py-4 w-[100%] lg:w-[40%] text-center">
        LexFlix
      </div>
      <div className="container mx-auto text-xl">
        <p>
          A movie chatbot powered by Amazon Lex. The data is taken from IMDB's
          list of top 1000 movies of all time.
        </p>
        <ul className="container flex flex-row font-semibold mt-2">
          <li>
            <a
              href="https://github.com/christopher-coyne/lexflix"
              target={`_blank`}
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              className="ml-3"
              target={`_blank`}
              rel="noreferrer noopener"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://github.com/christopher-coyne/imdb_movies"
              className="ml-3"
              target={`_blank`}
            >
              Dataset
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
