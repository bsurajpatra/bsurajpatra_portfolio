import React, { useState } from "react";
import "./Certifications.css"; // Create a CSS file for styling

import Menu from "./CertificationsMenu"; // Create a menu file for certifications
import { RiInformationLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Certifications = () => {
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
		<section className="certifications container section" id="certifications">
			<h2 className="section__title">Certifications</h2>

			<div className="certifications__container grid">
				{items.map((elem) => {
					const { id, image, title, description } = elem;

					return (
						<motion.div
							layout
							animate={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="certifications__card"
							key={id}>
							<div className="certifications__thumbnail">
								<img src={image} alt="" className="certifications__img" height="267" />
							</div>

							<h3 className="certifications__title">{title}</h3>
							
							<a 
								href="#"
								className="certifications__info-button"
								onClick={(e) => toggleDescription(id, e)}
							>
								<RiInformationLine className="certifications__button-icon" />
							</a>
							
							{showDescription === id && (
								<div className="certifications__description-container">
									<p className="certifications__description">{description}</p>
								</div>
							)}
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default Certifications;