import React, { useState } from "react";
import "./Certifications.css"; 
import Menu from "./CertificationsMenu"; 

const Certifications = () => {
	const [items, setItems] = useState(Menu);
	const [showCertificate, setShowCertificate] = useState(null);

	// Function to toggle certificate display
	const toggleCertificate = (id) => {
		if (showCertificate === id) {
			setShowCertificate(null);
		} else {
			setShowCertificate(id);
		}
	};

	return (
		<section className="certifications container section" id="certifications">
			<h2 className="section__title">Certifications</h2>

			<ul className="certifications__list">
				{items.map((elem) => {
					const { id, title, company, certificate } = elem;

					return (
						<li className="certifications__item" key={id}>
							<div className="certifications__info">
								<h3 className="certifications__title">{title}</h3>
								<span className="certifications__company">{company}</span>
							</div>
							<button 
								className="certifications__view-button" 
								onClick={() => toggleCertificate(id)}
							>
								{showCertificate === id ? "Hide Certificate" : "View Certificate"}
							</button>

							{showCertificate === id && certificate && (
								<div className="certifications__certificate-container">
									<img 
										src={certificate.src}
										alt={`${title} Certificate`}
										className="certifications__certificate-image"
									/>
									<button 
										className="close-certificate"
										onClick={() => setShowCertificate(null)}
									>
										×
									</button>
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