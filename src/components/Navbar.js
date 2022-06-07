import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="container bg-midnightPurple max-w-none flex justify-between py-1.5 px-20 text-2xl text-white oxygen">
      <Link to={"/"}>
        <span className="text-pink">Lex</span>Flix
      </Link>
      <Link to={"/about"}>About</Link>
    </header>
  );
};

export default Navbar;

/*
<div class="container bg-purple w-full">
*/
