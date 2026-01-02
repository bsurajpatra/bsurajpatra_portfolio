import React, { useState } from "react";
import "./Experience.css";
import WorkExperience from "./WorkExperience";
import { motion, AnimatePresence } from "framer-motion";
import { RiBuilding4Line, RiCalendarLine, RiMapPin2Line, RiAwardLine, RiCloseLine } from "react-icons/ri";

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    return (
        <section className="experience container section" id="experience">
            <h2 className="section__title">Professional Journey</h2>

            <div className="experience__container">
                {/* Company Sidebar/Navigation */}
                <div className="experience__tabs">
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
                </div>

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
                                        <img
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

                            {WorkExperience[activeTab].certificate && (
                                <button
                                    className="experience__certificate-btn"
                                    onClick={() => setSelectedCertificate(WorkExperience[activeTab].certificate.src)}
                                >
                                    <RiAwardLine /> View Experience Certificate
                                </button>
                            )}
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
                            <img src={selectedCertificate} alt="Experience Certificate" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Experience;