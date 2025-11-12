import React, { useState } from "react";
import "./Certifications.css"; 
import Menu from "./CertificationsMenu"; 
import { motion, AnimatePresence } from "framer-motion";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const Certifications = () => {
	const items = Menu;
	const [expandedCertificates, setExpandedCertificates] = useState({});

	const toggleCertificate = (id) => {
		setExpandedCertificates(prev => ({
			...prev,
			[id]: !prev[id]
		}));
	};

	// Split items into two arrays
	const midPoint = Math.ceil(items.length / 2);
	const leftColumn = items.slice(0, midPoint);
	const rightColumn = items.slice(midPoint);

	const renderColumn = (columnItems) => (
		<div className="certifications__column">
			{columnItems.map((elem) => {
				const { id, title, company, certificate } = elem;
				const isActive = expandedCertificates[id];

				return (
					<div 
						className="certifications__item-wrapper" 
						key={id}
					>
						<motion.div 
							className="certifications__item" 
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3 }}
						>
							<div className="certifications__content">
								<h3 className="certifications__title">{title}</h3>
								<span className="certifications__company">{company}</span>
							</div>
							
							<div className="certifications__actions">
								<button 
									className="certifications__view-button" 
									onClick={() => toggleCertificate(id)}
									aria-expanded={isActive}
									aria-controls={`certificate-${id}`}
								>
									{isActive ? (
										<>
											<RiEyeOffLine />
											Hide Certificate
										</>
									) : (
										<>
											<RiEyeLine />
											View Certificate
										</>
									)}
								</button>
							</div>
						</motion.div>

						<AnimatePresence>
							{isActive && certificate && (
								<motion.div 
									className="certifications__dropdown"
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.3 }}
									id={`certificate-${id}`}
								>
									<img 
										src={certificate.src}
										alt={`${title} Certificate`}
										className="certifications__certificate-image"
										loading="lazy"
									/>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				);
			})}
		</div>
	);

	return (
		<section className="certifications container section" id="certifications">
			<h2 className="section__title">Certifications</h2>

			<div className="certifications__container">
				{renderColumn(leftColumn)}
				{renderColumn(rightColumn)}
			</div>
		</section>
	);
};

export default Certifications;