import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Scroller from "./Scroller";
import Greet from "./Greet";
import Skills from "./Skills";
import Projects from "./Projects";

import "./homepage.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Scroller />
      <Greet />
      <Skills />
      <Projects />
    </div>
  );
}
