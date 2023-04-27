import React from "react";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => closeModal(false)}> close </button>
        <div className="title">
          <h1>RESTful API for Order Management with MongoDB Integration</h1>
        </div>
        <div className="body">
          <p>
            In this <b>Backend only</b> project, I created a <b>RESTful API</b>{" "}
            for managing orders and customer information. Built using{" "}
            <b>Node.js, Express,</b> and <b>MongoDB</b>, it features CRUD
            operations for orders and customer data, <b>JWT</b>-based
            authentication, <b>Swagger</b> documentation, and extensibility.
            With a separate OrdersDAO module for <b>MongoDB</b> interactions,
            this API provides a strong foundation for building web applications.
          </p>
        </div>
        <div className="footer">
          <a
            href="https://github.com/lukacasey/RESTful-API-for-Order-Management-with-MongoDB-Integration.git"
            target="_blank"
            rel="noreferrer"
          >
            View Code in GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
