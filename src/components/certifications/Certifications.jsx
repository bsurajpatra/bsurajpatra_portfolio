import React, { useState } from "react";
import "./Certifications.css"; 
import Menu from "./CertificationsMenu"; 

const Certifications = () => {
	const [items, setItems] = useState(Menu);
	const [showCertificate, setShowCertificate] = useState(null);

	const toggleCertificate = (id) => {
		setShowCertificate(prevId => prevId === id ? null : id);
	};

	return (
		<section className="certifications container section" id="certifications">
			<h2 className="section__title">Certifications</h2>

			<ul className="certifications__list">
				{items.map((elem) => {
					const { id, title, company, certificate } = elem;
					const isActive = showCertificate === id;

					return (
						<li 
							className={`certifications__item ${isActive ? 'certifications__item--expanded' : ''}`} 
							key={id}
						>
							<div className="certifications__info">
								<h3 className="certifications__title">{title}</h3>
								<span className="certifications__company">{company}</span>
							</div>
							<div className="certifications__actions">
								<button 
									className="certifications__view-button" 
									onClick={() => toggleCertificate(id)}
								>
									{isActive ? "Hide Certificate" : "View Certificate"}
								</button>
							</div>

							{isActive && certificate && (
								<div className="certifications__dropdown">
									<img 
										src={certificate.src}
										alt={`${title} Certificate`}
										className="certifications__certificate-image"
									/>
								</div>
							)}
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Certifications;