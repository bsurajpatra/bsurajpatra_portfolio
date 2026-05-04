import React, { useState } from "react";
import Menu from "./Menu";
import { RiGithubLine, RiLink, RiInformationLine, RiCloseLine } from "react-icons/ri";
import { FaReact, FaNodeJs, FaUnity, FaRobot, FaCode, FaGamepad, FaCreditCard, FaEnvelope, FaStore, FaRunning } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiMysql, SiVite, SiTailwindcss, SiRedis, SiShadcnui, SiPython, SiFlask, SiScikitlearn, SiJsonwebtokens, SiExpress, SiExpo } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const exactStyles = `
/* Clean Base Styles */
.projects__container {
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  padding: 1rem 0;
}
.projects__card {
  background-color: var(--container-color);
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 1.25rem;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
}
/* Glass reflection effect */
.projects__card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 1;
}
.projects__card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: var(--first-color);
}
.projects__card:hover::before {
  opacity: 0.1;
}
.projects__thumbnail-simple {
  position: relative;
  width: 100%;
  padding-top: 65%;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #f8f9fa;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.02);
}
.projects__img-simple {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 1.5rem;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1));
}
.projects__card:hover .projects__img-simple {
  transform: scale(1.1) rotate(2deg);
  filter: drop-shadow(0 15px 25px rgba(108, 108, 229, 0.2));
}
.projects__title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding: 0 0.5rem;
}
.projects__title-simple {
  font-size: 1.25rem;
  color: var(--title-color);
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.5px;
}
.projects__detail-btn {
  background: rgba(108, 108, 229, 0.1);
  border: 1px solid rgba(108, 108, 229, 0.2);
  border-radius: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: var(--first-color);
  cursor: pointer;
  transition: all 0.3s ease;
}
.projects__detail-btn:hover {
  background-color: var(--first-color);
  color: #fff;
  transform: rotate(15deg) scale(1.1);
  box-shadow: 0 5px 15px rgba(108, 108, 229, 0.4);
}
.projects__filters {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.5rem;
  margin-bottom: 2.5rem;
}
.projects__filter-btn {
  cursor: pointer;
  color: var(--title-color);
  font-weight: var(--font-medium);
  padding: 0.5rem 1.25rem;
  border-radius: 0.75rem;
  transition: 0.3s;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.projects__filter-btn:hover {
  background-color: var(--first-color);
  color: #fff;
  border-color: var(--first-color);
}
.active-filter {
  background-color: var(--first-color);
  color: #fff;
  border-color: var(--first-color);
  box-shadow: 0 4px 12px rgba(108, 108, 229, 0.3);
}
[data-theme="dark"] .projects__filter-btn {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
}
[data-theme="dark"] .projects__filter-btn:hover,
[data-theme="dark"] .active-filter {
  background-color: var(--first-color);
  color: #fff;
  border-color: var(--first-color);
  box-shadow: 0 0 15px var(--first-color);
}

/* MODAL STYLES */
.project-modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  backdrop-filter: blur(5px);
}
.project-modal__content {
  background-color: var(--container-color);
  width: 100%;
  max-width: 600px;
  border-radius: 1.5rem;
  padding: 2rem;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}
.project-modal__close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1.5rem;
  color: var(--title-color);
  cursor: pointer;
  z-index: 10;
  transition: 0.3s;
  border: none;
}
.project-modal__close:hover {
  color: var(--first-color);
  transform: rotate(90deg);
}
.project-modal__title {
  font-size: var(--h2-font-size);
  color: var(--title-color);
  margin-bottom: 1.5rem;
  padding-right: 2rem;
}
.project-modal__img-wrapper {
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
.project-modal__img-wrapper img {
  width: 100%;
  height: auto;
  display: block;
}
.project-modal__description {
  color: var(--text-color);
  font-size: var(--normal-font-size);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
.project-modal__subtitle {
  font-size: var(--h3-font-size);
  color: var(--title-color);
  margin-bottom: 0.75rem;
}
.project-modal__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}
.project-modal__tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(0, 0, 0, 0.05);
  color: var(--first-color);
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  font-size: var(--small-font-size);
  font-weight: 500;
}
[data-theme="dark"] .project-modal__tag {
  background-color: rgba(255, 255, 255, 0.1);
}
.project-modal__actions {
  display: flex;
  gap: 1rem;
}
.project-modal__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 1rem;
  background-color: var(--first-color);
  color: #fff;
  font-weight: var(--font-medium);
  transition: 0.3s;
  text-decoration: none;
}
.project-modal__link:hover {
  background-color: var(--title-color);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

@media screen and (max-width: 992px) {
  .projects__container { grid-template-columns: repeat(2, 1fr); }
}
@media screen and (max-width: 576px) {
  .projects__container { grid-template-columns: 1fr; }
  .projects__filters { column-gap: 0.8rem; margin-bottom: 2rem; }
  .projects__filter-btn { padding: 0.45rem 1rem; font-size: var(--small-font-size); }
  .project-modal__content { padding: 1.5rem; }
}

/* Dark Mode Overrides - Premium Aesthetics */
[data-theme="dark"] .projects__card {
  background: linear-gradient(145deg, rgba(40, 40, 40, 0.9), rgba(30, 30, 30, 0.9));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
[data-theme="dark"] .projects__card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  border-color: rgba(255, 255, 255, 0.15);
}
[data-theme="dark"] .projects__thumbnail-simple {
  background-color: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.1);
}
[data-theme="dark"] .projects__title-simple { color: #fff; }
[data-theme="dark"] .projects__detail-btn {
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--first-color);
  background: rgba(255, 255, 255, 0.05);
}
[data-theme="dark"] .projects__detail-btn:hover {
  background-color: var(--first-color);
  color: #fff;
  border-color: var(--first-color);
  box-shadow: 0 0 15px var(--first-color);
}
[data-theme="dark"] .project-modal__content {
  background: hsl(0, 0%, 15%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}
[data-theme="dark"] .project-modal__title,
[data-theme="dark"] .project-modal__subtitle { color: #fff; }
[data-theme="dark"] .project-modal__description { color: #a7aeb9; }
[data-theme="dark"] .project-modal__tag {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--first-color);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Custom Scrollbar for Modal Content */
.project-modal__content::-webkit-scrollbar { width: 8px; }
.project-modal__content::-webkit-scrollbar-track { background: transparent; margin-block: 1rem; }
.project-modal__content::-webkit-scrollbar-thumb { background-color: rgba(0, 0, 0, 0.2); border-radius: 20px; }
[data-theme="dark"] .project-modal__content::-webkit-scrollbar-thumb { background-color: rgba(255, 255, 255, 0.2); }
`;

const Projects = () => {
	const [activeFilter, setActiveFilter] = useState("Apps");
	const [items, setItems] = useState(Menu.filter((item) => item.type === "Apps"));
	const [selectedProject, setSelectedProject] = useState<any>(null);

	const filterItems = (category: string) => {
		setActiveFilter(category);
		const newItems = Menu.filter((item) => item.type === category);
		setItems(newItems);
	};

	const getTechIcon = (tech: string) => {
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
            <style dangerouslySetInnerHTML={{ __html: exactStyles }} />
			<h2 className="section__title">Projects</h2>

			<motion.div
				className="projects__filters"
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
			>
				{["Apps", "Games"].map((category) => (
					<button
						key={category}
						className={`projects__filter-btn ${activeFilter === category ? "active-filter" : ""}`}
						onClick={() => filterItems(category)}
					>
						{category}
					</button>
				))}
			</motion.div>

			<motion.div
				layout
				className="projects__container grid"
			>
				<AnimatePresence mode="popLayout">
					{items.map((elem) => {
						const { id, image, title } = elem;

						return (
							<motion.div
								layout
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.3 }}
								className="projects__card"
								key={id}
							>
								<div className="projects__thumbnail-simple">
									<Image src={image} alt={title} className="projects__img-simple" />
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
				</AnimatePresence>
			</motion.div>

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
								<Image src={selectedProject.image} alt={selectedProject.title} />
							</div>

							<p className="project-modal__description">{selectedProject.description}</p>

							<div className="project-modal__info">
								<h4 className="project-modal__subtitle">Tech Stack:</h4>
								<div className="project-modal__tags">
									{selectedProject.category.join(',').split(',').map((cat: string, i: number) => (
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
								{selectedProject.repositoryUrl && (
									<a href={selectedProject.repositoryUrl} target="_blank" rel="noreferrer" className="project-modal__link">
										<RiGithubLine /> Repository
									</a>
								)}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Projects;