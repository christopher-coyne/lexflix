import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="container bg-midnightPurple max-w-none flex justify-between py-1.5 px-8 sm:px-20 text-2xl text-white">
      <Link to={"/"}>
        <span className="text-pink font-ubuntu">Lex</span>Flix
      </Link>
      <Link to={"/about"} className="font-oxygen">
        About
      </Link>
    </header>
  );
};
