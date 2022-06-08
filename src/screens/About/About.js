import React from "react";
import "./About.css";
import Navbar from "../../components/Navbar";

const About = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-midnightPurple to-gradientEndPurple h-screen">
        <Navbar />
        Hello world
      </div>
    </>
  );
};

/* <div className="bg-gradient-to-r from-white to-purple">Hello world</div> */

export default About;
