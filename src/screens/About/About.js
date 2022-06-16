import React from "react";
import "./About.css";
import Navbar from "../../components/Navbar";
import aboutText from "./aboutText";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-midnightPurple to-gradientEndPurple h-screen text-center">
        <Navbar />
        <div className="text-white font-ubuntu container mx-auto text-left w-50% max-w-5xl">
          <Link className="text-pink text-2xl mt-4" to={"/"}>
            {"<"} Back
          </Link>
          <h1 className="text-2xl mt-4">What is the stack of this project?</h1>
          <p>{aboutText.stack}</p>
          <h1 className="text-2xl mt-4">
            Can I get the IMDB data used for this project?
          </h1>
          <p>
            {aboutText.data}{" "}
            <a
              href="https://github.com/christopher-coyne/imdb_movies"
              className="ml-3"
              target={`_blank`}
            >
              Here
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

/* <div className="bg-gradient-to-r from-white to-purple">Hello world</div> */

export default About;
