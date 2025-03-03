import React from 'react';
import './SkillsAndTechnology.css';

const skillsData = [
    {
        category: "🖥️ Programming Languages",
        items: ["C", "Java", "Python", "SQL", "HTML", "CSS", "JavaScript"],
    },
    {
        category: "🛠️ Development & Technologies",
        items: ["MERN Stack Web Development", "Full Stack Development", "Linux Administration", "Generative AI Prompting"],
    },
    {
        category: "📊 Data Structures & Algorithms (DSA)",
        items: ["Intermediate DSA"],
    },
    {
        category: "🎨 Design",
        items: ["Graphics Designing"],
    },
    {
        category: "📂 Version Control & DevOps",
        items: ["Git", "GitHub", "GitLab"],
    },
    {
        category: "⚡ Agile & Project Management",
        items: ["Agile & Scrum", "Team Management","Presentation", "Public Speaking", "Design Thinking", "Strategic Vision"],
    },
    {
        category: "📎 Productivity & Office Tools",
        items: ["MS Office", "PowerBI", "Libre Office"],
    },
    {
        category: "🛠️ Developer Tools",
        items: ["VS Code", "Eclipse", "MySQL Workbench", "GitHub", "GitLab", "Postman", "Vercel", "Render"],
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
