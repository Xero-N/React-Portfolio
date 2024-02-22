import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import ProjectGallery from "./ProjectGallery";


const Projects = () => {
	return (
		<section className="container mt-5" id="projects">
			<h2>Projects</h2>
			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
				{projects.map((project, id) => (
					<ProjectGallery key={id} project={project} />
				))}
			</div>
		</section>
	);
};

export default Projects;
