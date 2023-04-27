import React from "react";
import Modal from "./Modal";
import { useState, useEffect } from "react";

export default function Projects() {
  const [openModal, setOpenModal] = useState(false);
  const [prevOverflow, setPrevOverflow] = useState("");

  useEffect(() => {
    // Disable scrolling when the modal is open
    if (openModal) {
      setPrevOverflow(document.body.style.overflow);
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("modal-open");
    }
    // Re-enable scrolling when the modal is closed
    else {
      document.body.style.overflow = prevOverflow;
      document.documentElement.classList.remove("modal-open");
    }
  }, [openModal, prevOverflow]);

  return (
    <section>
      <div className="projects">
        <h2>Projects</h2>
        <p>Here are a few past projects I've worked on.</p>
      </div>
      <div className="container1">
        <div
          className="project shadow-lg openModalBtn"
          onClick={() => setOpenModal(true)}
        >
          <p>Order Management Project</p>
        </div>
        <div className="project shadow-lg">
          <p>Coming Soon</p>
        </div>
        <div className="project shadow-lg">
          <p>Coming Soon</p>
        </div>
      </div>
      {openModal && (
        <Modal
          closeModal={() => {
            setOpenModal(false);
            setPrevOverflow("");
          }}
          blurBackground={true}
        />
      )}
    </section>
  );
}
