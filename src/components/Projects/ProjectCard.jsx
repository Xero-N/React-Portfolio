import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Projects.module.css";

const ProjectGallery = ({ project }) => {
  const { title, imageSrc, deployedLink, githubLink } = project;

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="container mt-5">
      <div className="card h-100 text-center">
        <img
          src={imageSrc}
          alt={`Image of ${title}`}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <button
            className="btn btn-primary"
            onClick={toggleModal}
            style={{ background: "orange" }}
          >
            View Details
          </button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <div>
            <a
              href={deployedLink}
              className="btn btn-primary me-2"
              style={{ background: "orange" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              See Live
            </a>
          </div>
          <div>
            <a
              href={githubLink}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" className="close" onClick={toggleModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Description: {project.description}</p>
                <p>Skills: {project.skills.join(", ")}</p>
                <p>
                  <strong>Deployed Link:</strong>{" "}
                  <a
                    href={deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {deployedLink}
                  </a>
                </p>
                <p>
                  <strong>Github Link:</strong>{" "}
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {githubLink}
                  </a>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ProjectGallery.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    deployedLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectGallery;
