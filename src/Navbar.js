import React from "react";
import house from "./img/home.png";

export default function Navbar() {
  return (
    <div className="navBar">
      <div className="d-flex justify-content-between align-items-center mx-5 mt-5">
        <a alt="#" href="/">
          <img className="houseimg" src={house} alt="Home icon"></img>
        </a>
        <div>
          <p className="email">Email: lukacasaletto2000@gmail.com</p>
          <p className="email">Mobile: 0451 507 561</p>
        </div>
      </div>
    </div>
  );
}
