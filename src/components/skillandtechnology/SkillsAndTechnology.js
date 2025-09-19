import React from 'react';
import './SkillsAndTechnology.css';

const skillsData = [
    {
        category: "🖥️ Programming Languages",
        items: ["C", "Java", "JavaScript"],
    },
    {
        category: "⚙️ Frameworks & Platforms",
        items: [
            "MERN Stack Web Development",
            "Spring Boot + React Full Stack Development"
        ],
    },
    {
        category: "🗄️ Databases",
        items: ["SQL", "MySQL", "PostgreSQL", "MongoDB"],
    },
    {
        category: "📊 Data Structures & Algorithms (DSA)",
        items: ["Proficient DSA"],
    },
    {
        category: "📂 Version Control & DevOps",
        items: ["Git", "GitHub", "GitLab", "Docker", "Jenkins"],
    },
    {
        category: "⚡ Agile & Project Management",
        items: [
            "Agile & Scrum",
            "Team Management",
            "Design Thinking",
            "Strategic Vision"
        ],
    },
    {
        category: "🛠️ Developer Tools",
        items: [
            "VS Code",
            "Eclipse",
            "MySQL Workbench",
            "Postman"
        ],
    },
];



const SkillsAndTechnology = () => {
    return (
        <section className="skills container section" id="skills">
            <h2 className="section__title">Skills & Technologies</h2>
            <ul className="skills__list">
                {skillsData.map(({ category, items }, index) => (
                    <li key={index} className="skills__category">
                        <h3 className="skills__category-title">{category}</h3>
                        <ul className="skills__items">
                            {items.map((item, i) => (
                                <li key={i} className="skills__item">{item}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default SkillsAndTechnology;
