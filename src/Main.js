import React from "react";

import avatar from "./img/avatar.png";
import tech1 from "./img/tech1.png";
import api from "./img/api.png";

export default function Main() {
  return (
    <div className="main">
      <section className="front-page d-flex align-items-center flex-column">
        <h1 className="mt-2">Full Stack Web Developer</h1>
        <h5 className="mt-2 fw-normal">Specializing in the MERN Stack</h5>
        <img className="mt-5 avatar" alt="#" src={avatar}></img>
      </section>

      <section className="fullstack d-flex justify-content-center">
        <img className="mt-5 tech1" alt="#" src={tech1}></img>
        <img className="mt-5 tech1" alt="#" src={api}></img>
      </section>
    </div>
  );
}