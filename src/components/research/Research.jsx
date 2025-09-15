import React from "react";
import "./Research.css";

const Research = () => {
    const items = [
        {
            id: 1,
            category: "Patents",
            title: "Biometric-based Voting System with Multi-layer Authentication",
            application: "Application No: IN202541073801",
            publication: "Published: Aug 2025 (Journal No. 34/2025)",
            ipr: "Intellectual Property India",
            published: true,
            summary:
                "The invention is a multi-layer biometric voting system that prevents voter impersonation and enhances electoral security. It verifies identity through five layers: Aadhaar-based fingerprint, facial recognition, OTP via registered mobile, voter ID cross-check, and geo-fencing at the polling location. All attempts are logged in a tamper-proof backend, unlocking the voting interface only after successful verification. A centralized dashboard enables real-time monitoring, and the system complies with privacy safeguards, offering modular verification without mandating Aadhaar. This ensures transparency, prevents proxy voting, and strengthens India’s electoral process.",
        },
    ];

    return (
        <section className="research container section" id="research">
            <h2 className="section__title">Research & Publications</h2>

            <div className="research__list">
                {items.map((item) => (
                    <article className="research__item" key={item.id}>
                        <div className="research__header">
                            <div className="research__badges">
                                <span className="research__badge">{item.category}</span>
                                {item.ipr && (
                                    <span className="research__ipr">{item.ipr}</span>
                                )}
                                {item.published && (
                                    <span className="research__published">Published</span>
                                )}
                            </div>
                            <h3 className="research__title">{item.title}</h3>
                        </div>
                        <div className="research__meta">
                            <span className="research__app">{item.application}</span>
                            <span className="research__dot">•</span>
                            <span className="research__pub">{item.publication}</span>
                        </div>
                        <p className="research__summary">{item.summary}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Research;


