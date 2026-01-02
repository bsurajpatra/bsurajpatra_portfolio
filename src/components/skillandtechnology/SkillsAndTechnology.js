import React from 'react';
import './SkillsAndTechnology.css';
import {
    FaJava, FaJs, FaReact, FaGitAlt, FaGithub, FaGitlab,
    FaDocker, FaUnity, FaUsers, FaLightbulb, FaBullseye, FaGamepad
} from 'react-icons/fa';
import {
    SiC, SiSpringboot, SiMysql, SiPostgresql, SiMongodb, SiJenkins,
    SiEclipseide, SiPostman, SiLeetcode,
} from 'react-icons/si';
import { TbSql, TbBrandVscode, TbBrandCSharp } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";

const skillsData = [
    {
        category: "🖥️ Programming Languages",
        items: [
            { name: "C", icon: <SiC /> },
            { name: "Java", icon: <FaJava /> },
            { name: "JavaScript", icon: <FaJs /> },
        ],
    },
    {
        category: "⚙️ Frameworks & Platforms",
        items: [
            { name: "MERN Stack Web Development", icon: <FaReact /> },
            { name: "Spring Boot + React Full Stack Development", icon: <SiSpringboot /> }
        ],
    },
    {
        category: "🗄️ Databases",
        items: [
            { name: "SQL", icon: <TbSql /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MongoDB", icon: <SiMongodb /> },
        ],
    },
    {
        category: "📊 Data Structures & Algorithms (DSA)",
        items: [
            { name: "Proficient DSA", icon: <SiLeetcode /> },
        ],
    },
    {
        category: "📂 Version Control & DevOps",
        items: [
            { name: "Git", icon: <FaGitAlt /> },
            { name: "GitHub", icon: <FaGithub /> },
            { name: "GitLab", icon: <FaGitlab /> },
            { name: "Docker", icon: <FaDocker /> },
            { name: "Jenkins", icon: <SiJenkins /> },
        ],
    },
    {
        category: "⚡ Agile & Project Management",
        items: [
            { name: "Agile & Scrum", icon: <BsKanban /> },
            { name: "Team Management", icon: <FaUsers /> },
            { name: "Design Thinking", icon: <FaLightbulb /> },
            { name: "Strategic Vision", icon: <FaBullseye /> }
        ],
    },
    {
        category: "🛠️ Developer Tools",
        items: [
            { name: "VS Code", icon: <TbBrandVscode /> },
            { name: "Eclipse", icon: <SiEclipseide /> },
            { name: "MySQL Workbench", icon: <SiMysql /> },
            { name: "Postman", icon: <SiPostman /> },
        ],
    },
    {
        category: "🎮 Game Development & UX",
        items: [
            { name: "Unity Engine (2D/3D)", icon: <FaUnity /> },
            { name: "C# Gameplay Scripting", icon: <TbBrandCSharp /> },
            { name: "Player-Centered UX Design", icon: <FaUsers /> },
            { name: "Interaction Design for Games", icon: <FaGamepad /> }
        ],
    }
];

const SkillsAndTechnology = () => {
    return (
        <section className="skills container section" id="skills">
            <h2 className="section__title">Skills & Technologies</h2>

            <div className="skills__list-container">
                {skillsData.map(({ category, items }, index) => (
                    <div key={index} className={`skills__box skills__box-${index % 5}`}>
                        <h3 className="skills__category-header">{category}</h3>
                        <div className="skills__items-wrapper">
                            {items.map((skill, i) => (
                                <div key={i} className="skills__pill">
                                    <span className="skills__icon">{skill.icon}</span>
                                    <span className="skills__text">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsAndTechnology;
