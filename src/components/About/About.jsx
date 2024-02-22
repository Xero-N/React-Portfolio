// About.jsx
import React from 'react';
import skillsData from '../../data/skills.json';
import styles from "./About.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getImageUrl } from "../../utils"


const About = () => {
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-lg-6">
					<h2>About Me</h2>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati necessitatibus temporibus quo officiis, quidem explicabo consectetur? Sapiente similique praesentium facere officia accusamus iste quod saepe culpa voluptatibus iusto eum, at quia odit ipsam id eveniet dolores molestiae perspiciatis quis.
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati necessitatibus temporibus quo officiis, quidem explicabo consectetur? Sapiente similique praesentium facere officia accusamus iste quod saepe culpa voluptatibus iusto eum, at quia odit ipsam id eveniet dolores molestiae perspic
					</p>
				</div>
				<div className="col-lg-6">
					<img src={getImageUrl("aboutcode2.svg")} alt="" className={`img-fluid ${styles.aboutcode}`} />
				</div>
				<hr></hr>
			</div>
			<div className="row mt-5">
				<div className="col-lg-12">
					<h2>Skills</h2>
					<div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4">
						{skillsData.map(skill => (
							<div className="col" key={skill.id}>
								<div className="d-flex flex-column align-items-center">
									<FontAwesomeIcon icon={skill.icon} className={styles.skillsIcons} />
									<p className="mt-2">{skill.name}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;

