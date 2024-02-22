import React from "react";

import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";
import PropTypes from 'prop-types'; // Import PropTypes


const ProjectGallery = ({ project }) => {
	const { title, imageSrc, description, skills, deployedLink, githubLink } = project;

	return (
		<div className="container mt-5">
			<div className="card h-100">
				<img
					src={getImageUrl(imageSrc)}
					alt={`Image of ${title}`}
					className="card-img-top"
				/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
				</div>
				<div className="card-footer">
					<small className="text-muted">Skills: {skills.join(", ")}</small>
				</div>
				<div className="card-footer">
					<a href={deployedLink} className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">Deployed Version</a>
					<a href={githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
				</div>
			</div>
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
		githubLink: PropTypes.string.isRequired
	}).isRequired,
};

export default ProjectGallery;
