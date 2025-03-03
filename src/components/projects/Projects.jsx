import React, { useState } from "react";
import "./Projects.css";

import Menu from "./Menu";
import { RiGithubLine, RiLink, RiInformationLine } from "react-icons/ri";

import { motion } from "framer-motion";

const Projects = () => {
	const [items, setItems] = useState(Menu);
	const [showDescription, setShowDescription] = useState(null);

	const toggleDescription = (id, e) => {
		e.preventDefault();
		e.stopPropagation();
		setShowDescription(showDescription === id ? null : id);
	};

	return (
		<section className="projects container section" id="projects">
			<h2 className="section__title">Projects</h2>

			<div className="projects__container grid">
				{items.map((elem) => {
					const { id, image, title, category, url, repositoryUrl, description } = elem;

					return (
						<motion.div
							layout
							animate={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="projects__card"
							key={id}>
							<div className="projects__thumbnail">
								<img src={image} alt="" className="projects__img" height="267" />
								<div className="projects__mask"></div>
							</div>

							<span className="projects__category">{category.join(', ')}</span>
							<h3 className="projects__title">{title}<br/><br/><h6>{description}</h6></h3>
							
							<a 
								href={url} 
								target="_blank" 
								rel="noreferrer" 
								className="projects__button"
								onClick={(e) => {
									e.stopPropagation();
								}}
							>
								<RiLink className="projects__button-icon" />
							</a>
							
							<a 
								href={repositoryUrl} 
								target="_blank" 
								rel="noreferrer" 
								className="projects__github-button"
								onClick={(e) => {
									e.stopPropagation();
								}}
							>
								<RiGithubLine className="projects__button-icon" />
							</a>
							
						
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;