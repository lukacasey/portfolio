import React from "react";
import "./scrollerstyle.css";

// img
import html from "./img/html.png";
import css from "./img/css.png";
import js from "./img/js.png";
import react from "./img/react.png";
import bootstrap from "./img/bootstrap.png";
import node from "./img/node.png";
import ex from "./img/ex.png";
import mongo from "./img/mongo.png";
import restapi from "./img/restapi.png";
import json from "./img/json.png";

export default function Scroller() {
  return (
    <div className="container">
      <h2 className="title"></h2>
      <div className="marquee-wrapper">
        <div className="marquee">
          <div className="marquee-group">
            {" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={html}
                  alt="Cooking icon"
                />{" "}
                <span className="marquee-tag">HTML</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={css}
                  alt="Photography icon"
                />{" "}
                <span className="marquee-tag">CSS</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={js}
                  alt="Running icon"
                />{" "}
                <span className="marquee-tag">JavaScript</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={react}
                  alt="Running icon"
                />{" "}
                <span className="marquee-tag">React</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={bootstrap}
                  alt="Hiking icon"
                />{" "}
                <span className="marquee-tag">Bootstrap</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={node}
                  alt="Gardening icon"
                />{" "}
                <span className="marquee-tag">Node.js</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={ex}
                  alt="Palette icon"
                />{" "}
                <span className="marquee-tag">Express.js</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={mongo}
                  alt="Soccer icon"
                />{" "}
                <span className="marquee-tag">MongoDB</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Mongoose_Web_Server.svg/240px-Mongoose_Web_Server.svg.png"
                  alt="Golf icon"
                />{" "}
                <span className="marquee-tag">Mongoose</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={restapi}
                  alt="Gym icon"
                />{" "}
                <span className="marquee-tag">RESTful APIs</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={json}
                  alt="Music icon"
                />{" "}
                <span className="marquee-tag">JSON</span>{" "}
              </div>
            </a>{" "}
          </div>
          <div aria-hidden="true" className="marquee-group">
            {" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={html}
                  alt="Cooking icon"
                />{" "}
                <span className="marquee-tag">HTML</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={css}
                  alt="Photography icon"
                />{" "}
                <span className="marquee-tag">CSS</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={js}
                  alt="Running icon"
                />{" "}
                <span className="marquee-tag">JavaScript</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={react}
                  alt="Running icon"
                />{" "}
                <span className="marquee-tag">React</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={bootstrap}
                  alt="Hiking icon"
                />{" "}
                <span className="marquee-tag">Bootstrap</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={node}
                  alt="Gardening icon"
                />{" "}
                <span className="marquee-tag">Node.js</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={ex}
                  alt="Palette icon"
                />{" "}
                <span className="marquee-tag">Express.js</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={mongo}
                  alt="Soccer icon"
                />{" "}
                <span className="marquee-tag">MongoDB</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Mongoose_Web_Server.svg/240px-Mongoose_Web_Server.svg.png"
                  alt="Golf icon"
                />{" "}
                <span className="marquee-tag">Mongoose</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={restapi}
                  alt="Gym icon"
                />{" "}
                <span className="marquee-tag">RESTful APIs</span>{" "}
              </div>
            </a>{" "}
            <a href="#" className="marquee-tag-wrapper">
              <div className="marquee-tag-container">
                {" "}
                <img
                  className="marquee-tag-icon"
                  width="32"
                  height="32"
                  src={json}
                  alt="Music icon"
                />{" "}
                <span className="marquee-tag">JSON</span>{" "}
              </div>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
