import React from "react";

import tech1 from "./img/tech1.png";
import api from "./img/api.png";

export default function Skills() {
  return (
    <section className="skills">
      <div className="card-deck ">
        <div className="card shadow d-flex align-items-center">
          <img className="card-img-top" src={tech1} alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title text-center title-text">Front end</h5>
            <p className="card-text">
              As a full-stack web developer, I am proficient in a variety of
              front-end technologies and frameworks.
            </p>

            <div className="list">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>Bootstrap</p>
            </div>
            <p>
              Using these tools, I am able to create engaging, responsive, and
              user-friendly web applications.
            </p>
          </div>
        </div>
        <div className="card shadow d-flex align-items-center">
          <img className="card-img-top" src={api} alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title text-center title-text">Back end</h5>
            <p className="card-text">
              In addition to front-end development, I am also proficient in a
              variety of back-end technologies and frameworks.
            </p>

            <div className="list">
              <p>Node.js</p>
              <p>Express.js</p>
              <p>MongoDB</p>
              <p>Mongoose</p>
              <p>RESTful APIs</p>
              <p>JSON</p>
              <p>JSON Web Token</p>
            </div>
            <p>
              Using these tools, I am able to build robust and scalable web
              applications that can handle large amounts of data and traffic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
