import React, { useState } from "react";
import WorkExperience from "./WorkExperience";
import { motion, AnimatePresence } from "framer-motion";
import { RiCalendarLine, RiMapPin2Line, RiAwardLine, RiCloseLine, RiExternalLinkLine } from "react-icons/ri";
import Image from "next/image";

const exactStyles = `
.experience__container {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  align-items: flex-start;
  padding: 2rem 0;
}
/* Sidebar Tabs */
.experience__tabs {
  position: relative;
  display: flex;
  flex-direction: column;
}
.experience__tab {
  height: 60px;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: all 0.3s ease;
  border-left: 2px solid var(--border-color);
  color: var(--text-color);
  font-family: var(--body-font);
}
.experience__tab.active {
  color: var(--first-color);
  background: rgba(108, 108, 229, 0.05);
  border-left-color: var(--first-color);
}
.experience__tab:hover:not(.active) {
  background: rgba(108, 108, 229, 0.02);
  color: var(--title-color);
}
.experience__tab-number {
  font-family: var(--body-font);
  font-size: var(--small-font-size);
  font-weight: var(--font-bold);
  opacity: 0.5;
}
.active .experience__tab-number {
  opacity: 1;
}
.experience__tab-company {
  font-weight: var(--font-semibold);
  font-size: var(--normal-font-size);
}
/* Content Panel */
.experience__panel {
  background: var(--container-color);
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: var(--shadow);
  min-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
[data-theme="dark"] .experience__panel {
  border-color: rgba(255, 255, 255, 0.05);
}
.experience__panel-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
}
.experience__job-title {
  font-size: 1.5rem;
  color: var(--title-color);
  font-weight: var(--font-bold);
  line-height: 1.3;
}
.experience__at {
  color: var(--first-color);
}
.experience__company-name {
  color: var(--first-color);
}
.experience__meta {
  display: flex;
  gap: 1.5rem;
  margin-top: 0.75rem;
}
.experience__meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-color);
  font-size: var(--small-font-size);
  opacity: 0.8;
}
.experience__meta-item svg {
  color: var(--first-color);
}
.experience__logo-box {
  width: 80px;
  height: 80px;
  background: #fff;
  border-radius: 1rem;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}
.experience__logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.experience__list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.experience__list li {
  position: relative;
  padding-left: 1.75rem;
  color: var(--text-color);
  line-height: 1.6;
  font-size: var(--normal-font-size);
}
.experience__list li::before {
  content: "▹";
  position: absolute;
  left: 0;
  color: var(--first-color);
  font-size: 1.2rem;
  line-height: 1;
}
.experience__actions {
  display: flex;
  gap: 1.25rem;
  margin-top: auto;
  flex-wrap: wrap;
}
.experience__certificate-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(108, 108, 229, 0.1);
  color: var(--first-color);
  border: none;
  border-radius: 1rem;
  font-weight: var(--font-bold);
  cursor: pointer;
  transition: all 0.3s ease;
}
.experience__certificate-btn:hover {
  background: var(--first-color);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 76, 96, 0.2);
}
.experience__blog-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: var(--first-color);
  color: #fff;
  border-radius: 1rem;
  font-weight: var(--font-bold);
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 76, 96, 0.2);
  text-decoration: none;
}
.experience__blog-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 76, 96, 0.4);
  filter: brightness(1.1);
}
/* Modal Styling */
.exp-modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.exp-modal__content {
  position: relative;
  max-width: 500px;
  width: 100%;
  background: var(--container-color);
  padding: 1rem;
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}
.exp-modal__content img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
}
.exp-modal__close {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: var(--first-color);
  color: #fff;
  border: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.exp-modal__close:hover {
  transform: scale(1.1) rotate(90deg);
}
/* Responsive */
@media screen and (max-width: 1024px) {
  .experience__container {
    grid-template-columns: 200px 1fr;
    gap: 2rem;
  }
}
@media screen and (max-width: 768px) {
  .experience__container {
    grid-template-columns: 1fr;
  }
  .experience__tabs {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 1rem;
    scrollbar-width: none;
  }
  .experience__tabs::-webkit-scrollbar {
    display: none;
  }
  .experience__tab {
    border-left: none;
    border-bottom: 2px solid var(--border-color);
    min-width: 150px;
    justify-content: center;
  }
  .experience__tab.active {
    border-bottom-color: var(--first-color);
  }
  .experience__panel-header {
    flex-direction: column-reverse;
  }
  .experience__meta {
    flex-direction: column;
    gap: 0.5rem;
  }
}
@media screen and (max-width: 480px) {
  .experience__panel {
    padding: 1.5rem;
  }
  .experience__job-title {
    font-size: 1.25rem;
  }
  .exp-modal__close {
    top: 10px;
    right: 10px;
  }
}
`;

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

    return (
        <section className="experience container section" id="experience">
            <style dangerouslySetInnerHTML={{ __html: exactStyles }} />
            <h2 className="section__title">Professional Journey</h2>

            <div className="experience__container">
                {/* Company Sidebar/Navigation */}
                <motion.div
                    className="experience__tabs"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {WorkExperience.map((work, index) => (
                        <button
                            key={work.id}
                            className={`experience__tab ${index === activeTab ? "active" : ""}`}
                            onClick={() => setActiveTab(index)}
                        >
                            <span className="experience__tab-number">0{index + 1}</span>
                            <span className="experience__tab-company">{work.company}</span>
                        </button>
                    ))}
                    <div
                        className="experience__tab-indicator"
                        style={{ transform: `translateY(${activeTab * 60}px)` }}
                    />
                </motion.div>

                {/* Content Area */}
                <div className="experience__content">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="experience__panel"
                        >
                            <div className="experience__panel-header">
                                <div className="experience__company-info">
                                    <h3 className="experience__job-title">
                                        {WorkExperience[activeTab].title}
                                        <span className="experience__at"> @ </span>
                                        <span className="experience__company-name">{WorkExperience[activeTab].company}</span>
                                    </h3>

                                    <div className="experience__meta">
                                        <div className="experience__meta-item">
                                            <RiCalendarLine />
                                            <span>{WorkExperience[activeTab].yearsActive}</span>
                                        </div>
                                        <div className="experience__meta-item">
                                            <RiMapPin2Line />
                                            <span>{WorkExperience[activeTab].location}</span>
                                        </div>
                                    </div>
                                </div>

                                {WorkExperience[activeTab].image && (
                                    <div className="experience__logo-box">
                                        <Image
                                            src={WorkExperience[activeTab].image.src}
                                            alt={WorkExperience[activeTab].company}
                                            className="experience__logo"
                                        />
                                    </div>
                                )}
                            </div>

                            <ul className="experience__list">
                                {WorkExperience[activeTab].information.map((info, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        {info}
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="experience__actions">
                                {WorkExperience[activeTab].certificate && (
                                    <button
                                        className="experience__certificate-btn"
                                        onClick={() => setSelectedCertificate(WorkExperience[activeTab].certificate?.src)}
                                    >
                                        <RiAwardLine /> View Experience Certificate
                                    </button>
                                )}

                                {WorkExperience[activeTab].blogLink && (
                                    <a
                                        href={WorkExperience[activeTab].blogLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="experience__blog-btn"
                                    >
                                        <RiExternalLinkLine /> Read Internship Blog
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCertificate && (
                    <motion.div
                        className="exp-modal__overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCertificate(null)}
                    >
                        <motion.div
                            className="exp-modal__content"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="exp-modal__close"
                                onClick={() => setSelectedCertificate(null)}
                            >
                                <RiCloseLine />
                            </button>
                            <Image src={selectedCertificate} alt="Experience Certificate" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Experience;