import React, { useState } from "react";
import "./Research.css";
import { motion } from "framer-motion";
import { RiFileTextLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const Research = () => {
    const [expandedItems, setExpandedItems] = useState({});

    const toggleExpand = (id) => {
        setExpandedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const items = [
        {
            id: 1,
            category: "Patent",
            title: "Biometric-based Voting System with Multi-layer Authentication",
            application: "IN202541073801",
            publication: "Aug 2025 (Journal No. 34/2025)",
            ipr: "Intellectual Property India",
            published: true,
            summary:
                "The invention is a multi-layer biometric voting system that prevents voter impersonation and enhances electoral security. It verifies identity through five layers: Aadhaar-based fingerprint, facial recognition, OTP via registered mobile, voter ID cross-check, and geo-fencing at the polling location. All attempts are logged in a tamper-proof backend, unlocking the voting interface only after successful verification. A centralized dashboard enables real-time monitoring, and the system complies with privacy safeguards, offering modular verification without mandating Aadhaar. This ensures transparency, prevents proxy voting, and strengthens India's electoral process.",
        },
        {
            id: 2,
            category: "Patent",
            title: "DigiChit: A Digitalized Chit Fund Management System Using eKYC and Automated Mandate Processing",
            application: "IN202541098116",
            publication: "Nov 2025 (Journal No. 46/2025)",
            ipr: "Intellectual Property India",
            published: true,
            summary:
                "The invention introduces a secure and automated digital chit fund management system designed to improve transparency, accuracy, and trust in group savings operations. It integrates eKYC verification, automated mandate generation, secure payment workflows, and real-time fraud detection to ensure error-free contributions, auctions, and payouts. A modular architecture allows components like eKYC, mandate engine, fraud monitoring, and digital ledger to function independently while maintaining compliance with financial and regulatory requirements. Automated mandate processing calculates dues, executes contribution and payout instructions, and logs all actions with timestamps for auditability. A dedicated fraud detection module analyzes user behavior and activity patterns to identify anomalies in real time, while an immutable digital ledger ensures tamper-proof records, supporting transparency, dispute resolution, and regulatory checks."
        }
    ];

    return (
        <section className="research container section" id="research">
            <h2 className="section__title">Patents & Publications</h2>

            <div className="research__container">
                {items.map((item, index) => {
                    const isExpanded = expandedItems[item.id];

                    return (
                        <motion.article
                            className="research__card"
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="research__card-header">
                                <div className="research__icon-wrapper">
                                    <RiFileTextLine className="research__icon" />
                                </div>

                                <div className="research__header-content">
                                    <div className="research__badges">
                                        <span className="research__badge">{item.category}</span>
                                        {item.published && (
                                            <span className="research__status">Published</span>
                                        )}
                                    </div>

                                    <h3 className="research__title">{item.title}</h3>

                                    <div className="research__meta">
                                        <span className="research__meta-item">
                                            <strong>Application:</strong> {item.application}
                                        </span>
                                        <span className="research__meta-item">
                                            <strong>Published:</strong> {item.publication}
                                        </span>
                                        <span className="research__meta-item research__meta-ipr">
                                            {item.ipr}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="research__summary-section">
                                <p className={`research__summary ${isExpanded ? 'research__summary--expanded' : 'research__summary--collapsed'}`}>
                                    {isExpanded ? item.summary : `${item.summary.substring(0, 150)}...`}
                                </p>

                                <button
                                    className="research__toggle-btn"
                                    onClick={() => toggleExpand(item.id)}
                                >
                                    {isExpanded ? (
                                        <>
                                            Show Less <RiArrowUpSLine />
                                        </>
                                    ) : (
                                        <>
                                            Read More <RiArrowDownSLine />
                                        </>
                                    )}
                                </button>
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
};

export default Research;
