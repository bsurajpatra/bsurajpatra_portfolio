import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiFileTextLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const exactStyles = `
.research {
    padding: 6rem 0 2rem;
}
.research__container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
}
.research__card {
    background: var(--container-color);
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: var(--shadow);
    border-left: 4px solid var(--first-color);
    transition: all 0.3s ease;
}
.research__card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}
.research__card-header {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}
.research__icon-wrapper {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--first-color), var(--title-color));
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
.research__icon {
    font-size: 1.75rem;
    color: #fff;
}
.research__header-content {
    flex: 1;
    min-width: 0;
}
.research__badges {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
}
.research__badge {
    font-size: 0.75rem;
    font-weight: var(--font-semibold);
    color: #fff;
    background: var(--first-color);
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
.research__status {
    font-size: 0.75rem;
    font-weight: var(--font-semibold);
    color: #fff;
    background: linear-gradient(135deg, #10b981, #059669);
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
.research__title {
    color: var(--title-color);
    font-size: var(--h3-font-size);
    font-weight: var(--font-bold);
    margin-bottom: 0.75rem;
    line-height: 1.4;
}
.research__meta {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}
.research__meta-item {
    color: var(--text-color);
    font-size: var(--small-font-size);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
.research__meta-item strong {
    color: var(--title-color);
    font-weight: var(--font-semibold);
}
.research__meta-ipr {
    color: var(--first-color);
    font-weight: var(--font-medium);
    font-style: italic;
}
.research__summary-section {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border-color);
}
.research__summary {
    color: var(--text-color);
    line-height: 1.7;
    font-size: var(--normal-font-size);
    margin-bottom: 1rem;
}
.research__summary--collapsed {
    text-align: left;
}
.research__summary--expanded {
    text-align: justify;
}
.research__toggle-btn {
    background: transparent;
    color: var(--first-color);
    border: 1px solid var(--first-color);
    padding: 0.5rem 1.25rem;
    border-radius: 2rem;
    font-weight: var(--font-medium);
    font-size: var(--small-font-size);
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}
.research__toggle-btn:hover {
    background: var(--first-color);
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.research__toggle-btn svg {
    font-size: 1.2rem;
}
/* Dark Mode Adjustments */
[data-theme="dark"] .research__card {
    border-left-color: var(--first-color);
}
[data-theme="dark"] .research__card:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}
/* Responsive Design */
@media screen and (max-width: 768px) {
    .research { padding: 4rem 0 1.5rem; }
    .research__container { gap: 1.5rem; padding: 0 1rem; }
    .research__card { padding: 1.5rem; }
    .research__card-header { flex-direction: column; gap: 1rem; }
    .research__icon-wrapper { width: 50px; height: 50px; }
    .research__icon { font-size: 1.5rem; }
    .research__title { font-size: calc(var(--h3-font-size) - 0.1rem); }
    .research__meta { gap: 0.3rem; }
    .research__meta-item { font-size: calc(var(--small-font-size) - 0.05rem); }
    .research__summary { font-size: var(--small-font-size); }
}
@media screen and (max-width: 480px) {
    .research__container { padding: 0 0.5rem; }
    .research__card { padding: 1.25rem; }
    .research__card-header { gap: 0.75rem; }
    .research__icon-wrapper { width: 45px; height: 45px; }
    .research__icon { font-size: 1.25rem; }
    .research__badge, .research__status { font-size: 0.7rem; padding: 0.3rem 0.6rem; }
    .research__title { font-size: calc(var(--h3-font-size) - 0.2rem); line-height: 1.3; }
    .research__meta-item { font-size: calc(var(--small-font-size) - 0.1rem); }
    .research__toggle-btn { padding: 0.45rem 1rem; font-size: calc(var(--small-font-size) - 0.05rem); }
}
`;

const Research = () => {
    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

    const toggleExpand = (id: number) => {
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
            <style dangerouslySetInnerHTML={{ __html: exactStyles }} />
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
