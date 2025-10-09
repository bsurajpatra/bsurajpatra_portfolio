import React, { useState } from "react";
import "./Experience.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";
import WorkExperience from "./WorkExperience";

const Experience = () => {
    const [tabIndex, setTabIndex] = useState(0);
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
        <section className="experience container section" id="experience">
            <h2 className="section__title">Experience</h2>

            <div className="resume__container">
                <Tabs
                    className="tabs"
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    selectedTabClassName="is-active"
                    selectedTabPanelClassName="is-active"
                >
                    <TabList className="tab__list">
                        {WorkExperience.map(({ id, company }) => (
                            <Tab className="tab" key={`company-${id}`}>
                                <Button className="tab__button">
                                    {company}
                                </Button>
                            </Tab>
                        ))}
                    </TabList>

                    {WorkExperience.map(({ id, company, yearsActive, title, location, information, image, certificate }) => (
                        <TabPanel className="tab__panel" key={`panel-${id}`}>
                            <div className="panel-header">
                                {image && (
                                    <img 
                                        src={image.src} 
                                        alt={`${company} logo`} 
                                        className="panel-logo" 
                                        style={image.style} 
                                    />
                                )}
                                {certificate && (
                                    <button 
                                        className="certificate-button" 
                                        onClick={() => toggleCertificate(id)}
                                    >
                                        {showCertificate === id ? "Hide Certificate" : "View Certificate"}
                                    </button>
                                )}
                            </div>
                            
                            {showCertificate === id && certificate && (
                                <div className="certificate-container">
                                    <img 
                                        src={certificate.src}
                                        alt={`${company} Certificate`}
                                        style={certificate.style}
                                        className="certificate-image"
                                    />
                                    <button 
                                        className="close-certificate"
                                        onClick={() => setShowCertificate(null)}
                                    >
                                        ×
                                    </button>
                                </div>
                            )}
                            
                            <h2 className="tab__panel-title">{title} @ {company}</h2>
                            <p className="tab__panel-subtitle">{yearsActive} | {location}</p>
                            <ul className="tab__panel-list">
                                {information.map((info, index) => (
                                    <li key={`info-${index}`}>{info}</li>
                                ))}
                            </ul>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export default Experience;