import React, { useState } from "react";
import "./Projects.css";
import Menu from "./Menu";
import { RiGithubLine, RiLink, RiInformationLine, RiCloseLine } from "react-icons/ri";
import { FaReact, FaNodeJs, FaUnity, FaRobot, FaCode, FaGamepad, FaCreditCard, FaEnvelope, FaStore, FaRunning } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiMysql, SiVite, SiTailwindcss, SiRedis, SiShadcnui, SiPython, SiFlask, SiScikitlearn, SiJsonwebtokens, SiExpress, SiExpo } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
	const [items] = useState(Menu);
	const [selectedProject, setSelectedProject] = useState(null);

	const getTechIcon = (tech) => {
		const lower = tech.toLowerCase();
		if (lower.includes('expo')) return <SiExpo />;
		if (lower.includes('react')) return <FaReact />;
		if (lower.includes('node')) return <FaNodeJs />;
		if (lower.includes('express')) return <SiExpress />;
		if (lower.includes('next')) return <SiNextdotjs />;
		if (lower.includes('mongo')) return <SiMongodb />;
		if (lower.includes('mysql')) return <SiMysql />;
		if (lower.includes('vite')) return <SiVite />;
		if (lower.includes('tail')) return <SiTailwindcss />;
		if (lower.includes('redis')) return <SiRedis />;
		if (lower.includes('shadcn')) return <SiShadcnui />;
		if (lower.includes('unity')) return <FaUnity />;
		if (lower.includes('c#')) return <TbBrandCSharp />;
		if (lower.includes('python')) return <SiPython />;
		if (lower.includes('flask')) return <SiFlask />;
		if (lower.includes('scikit')) return <SiScikitlearn />;
		if (lower.includes('jwt')) return <SiJsonwebtokens />;
		if (lower.includes('ai') || lower.includes('ml') || lower.includes('face')) return <FaRobot />;
		if (lower.includes('game')) return <FaGamepad />;
		if (lower.includes('cash') || lower.includes('payment')) return <FaCreditCard />;
		if (lower.includes('email') || lower.includes('smtp')) return <FaEnvelope />;
		if (lower.includes('store') || lower.includes('asset')) return <FaStore />;
		if (lower.includes('mixamo')) return <FaRunning />;
		return <FaCode />;
	};

	return (
		<section className="projects container section" id="projects">
			<h2 className="section__title">Projects</h2>

			<div className="projects__container grid">
				{items.map((elem, index) => {
					const { id, image, title } = elem;

					return (
						<motion.div
							layout
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="projects__card"
							key={id}>
							<div className="projects__thumbnail-simple">
								<img src={image} alt={title} className="projects__img-simple" />
							</div>

							<div className="projects__title-row">
								<h3 className="projects__title-simple">{title}</h3>
								<button
									className="projects__detail-btn"
									onClick={() => setSelectedProject(elem)}
									title="View Details"
								>
									<RiInformationLine />
								</button>
							</div>
						</motion.div>
					);
				})}
			</div>

			<AnimatePresence>
				{selectedProject && (
					<motion.div
						className="project-modal__overlay"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedProject(null)}
					>
						<motion.div
							className="project-modal__content"
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 50, opacity: 0 }}
							onClick={(e) => e.stopPropagation()}
						>
							<button className="project-modal__close" onClick={() => setSelectedProject(null)}>
								<RiCloseLine />
							</button>

							<h3 className="project-modal__title">{selectedProject.title}</h3>

							<div className="project-modal__img-wrapper">
								<img src={selectedProject.image} alt={selectedProject.title} />
							</div>

							<p className="project-modal__description">{selectedProject.description}</p>

							<div className="project-modal__info">
								<h4 className="project-modal__subtitle">Tech Stack:</h4>
								<div className="project-modal__tags">
									{selectedProject.category.join(',').split(',').map((cat, i) => (
										<span key={i} className="project-modal__tag">
											{getTechIcon(cat)} {cat.trim()}
										</span>
									))}
								</div>
							</div>

							<div className="project-modal__actions">
								{selectedProject.url && (
									<a href={selectedProject.url} target="_blank" rel="noreferrer" className="project-modal__link">
										<RiLink /> Live Demo
									</a>
								)}
								<a href={selectedProject.repositoryUrl} target="_blank" rel="noreferrer" className="project-modal__link">
									<RiGithubLine /> Repository
								</a>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Projects;