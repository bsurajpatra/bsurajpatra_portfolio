import React, { useState } from "react";
import "./Certifications.css";
import Menu from "./CertificationsMenu";
import { motion, AnimatePresence } from "framer-motion";
import { RiEyeLine, RiCloseLine } from "react-icons/ri";

const Certifications = () => {
	const items = Menu;
	const [selectedCertificate, setSelectedCertificate] = useState(null);

	// Split items into two arrays
	const midPoint = Math.ceil(items.length / 2);
	const leftColumn = items.slice(0, midPoint);
	const rightColumn = items.slice(midPoint);

	const renderColumn = (columnItems) => (
		<div className="certifications__column">
			{columnItems.map((elem) => {
				const { id, title, company } = elem;

				return (
					<motion.div
						className="certifications__item"
						key={id}
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
								onClick={() => setSelectedCertificate(elem)}
								title="View Certificate"
							>
								<RiEyeLine />
								View Certificate
							</button>
						</div>
					</motion.div>
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

			<AnimatePresence>
				{selectedCertificate && (
					<motion.div
						className="certificate-modal__overlay"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedCertificate(null)}
					>
						<motion.div
							className="certificate-modal__content"
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 50, opacity: 0 }}
							onClick={(e) => e.stopPropagation()}
						>
							<button className="certificate-modal__close" onClick={() => setSelectedCertificate(null)}>
								<RiCloseLine />
							</button>

							<h3 className="certificate-modal__title">{selectedCertificate.title}</h3>
							<p className="certificate-modal__company">{selectedCertificate.company}</p>

							<div className="certificate-modal__img-wrapper">
								<img
									src={selectedCertificate.certificate.src}
									alt={`${selectedCertificate.title} Certificate`}
									className="certificate-modal__img"
								/>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Certifications;