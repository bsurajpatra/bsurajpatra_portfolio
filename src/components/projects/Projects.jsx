import React, { useState } from "react";
import "./Projects.css";

import Menu from "./Menu";
import { RiGithubLine, RiLink, RiInformationLine, RiCloseLine } from "react-icons/ri";

import { motion } from "framer-motion";

const Projects = () => {
	const [items, setItems] = useState(Menu);
	const [showDescription, setShowDescription] = useState(null);

	const toggleDescription = (id, e) => {
		e.preventDefault();
		e.stopPropagation();
		if (showDescription === id) {
			setShowDescription(null);
		} else {
			setShowDescription(id);
			setTimeout(() => {
				setShowDescription(null);
			}, 3000);
		}
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
							<h3 className="projects__title">{title}</h3>
							
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
							
							<a 
								href="#"
								className="projects__info-button"
								onClick={(e) => toggleDescription(id, e)}
							>
								<RiInformationLine className="projects__button-icon" />
							</a>
							
							{showDescription === id && (
								<div className="projects__description-container">
									<p className="projects__description">{description}</p>
								</div>
							)}
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;