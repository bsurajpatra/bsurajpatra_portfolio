import React from 'react';
import './SkillsAndTechnology.css';
import {
    FaJava, FaJs, FaReact, FaGitAlt, FaGithub, FaGitlab,
    FaDocker, FaUnity, FaUsers, FaLightbulb, FaBullseye, FaGamepad,
    FaWindows, FaAndroid, FaMobileAlt, FaPuzzlePiece, FaLayerGroup
} from 'react-icons/fa';
import {
    SiC, SiSpringboot, SiMysql, SiPostgresql, SiMongodb, SiJenkins,
    SiEclipseide, SiPostman, SiLeetcode, SiItchdotio
} from 'react-icons/si';
import { TbSql, TbBrandVscode, TbBrandCSharp } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { motion } from 'framer-motion';
import FloatingSkills from './FloatingSkills';
import Skill3D from './SkillItem3D';

const skillsData = [
    {
        category: "🖥️ Programming Languages",
        items: [
            { name: "C", icon: <SiC color="#A8B9CC" /> },
            { name: "Java", icon: <FaJava color="#007396" /> },
            { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
        ],
    },
    {
        category: "⚙️ Frameworks & Platforms",
        items: [
            { name: "MERN Stack Web Development", icon: <FaReact color="#61DAFB" /> },
            { name: "Spring Boot + React Full Stack Development", icon: <SiSpringboot color="#6DB33F" /> }
        ],
    },
    {
        category: "🗄️ Databases",
        items: [
            { name: "SQL", icon: <TbSql color="#4479A1" /> },
            { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
            { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
            { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        ],
    },
    {
        category: "📊 Data Structures & Algorithms (DSA)",
        items: [
            { name: "Proficient DSA", icon: <SiLeetcode color="#FFA116" /> },
        ],
    },
    {
        category: "📂 Version Control & DevOps",
        items: [
            { name: "Git", icon: <FaGitAlt color="#F05032" /> },
            { name: "GitHub", icon: <FaGithub color="#181717" /> },
            { name: "GitLab", icon: <FaGitlab color="#FC6D26" /> },
            { name: "Docker", icon: <FaDocker color="#2496ED" /> },
            { name: "Jenkins", icon: <SiJenkins color="#D24939" /> },
        ],
    },
    {
        category: "⚡ Agile & Project Management",
        items: [
            { name: "Agile & Scrum", icon: <BsKanban color="#0052CC" /> },
            { name: "Team Management", icon: <FaUsers color="#6C6CE5" /> },
            { name: "Design Thinking", icon: <FaLightbulb color="#FFD700" /> },
            { name: "Strategic Vision", icon: <FaBullseye color="#FF4D4D" /> }
        ],
    },
    {
        category: "🛠️ Developer Tools",
        items: [
            { name: "VS Code", icon: <TbBrandVscode color="#007ACC" /> },
            { name: "Eclipse", icon: <SiEclipseide color="#2C2255" /> },
            { name: "MySQL Workbench", icon: <SiMysql color="#4479A1" /> },
            { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
        ],
    },
    {
        category: "🎮 Game Development",
        items: [
            { name: "Unity Engine (2D/3D)", icon: <FaUnity color="#222C37" /> },
            { name: "C# Gameplay Scripting", icon: <TbBrandCSharp color="#239120" /> },
            { name: "Unity Physics / Game Logic", icon: <FaPuzzlePiece color="#FFD700" /> },
            { name: "Vuforia Engine (AR)", icon: <FaMobileAlt color="#4285F4" /> },
        ],
    },
    {
        category: "🧠 Game UX & Publishing",
        items: [
            { name: "Player-Centered UX Design", icon: <FaUsers color="#6C6CE5" /> },
            { name: "Interaction Design for Games", icon: <FaGamepad color="#FF4D4D" /> },
            { name: "Unity UI / Canvas Systems", icon: <FaLayerGroup color="#9B59B6" /> },
            { name: "itch.io Publishing", icon: <SiItchdotio color="#FA5C5C" /> },
            { name: "Windows Standalone Build (.exe)", icon: <FaWindows color="#0078D7" /> },
            { name: "WebGL / Android Builds", icon: <FaAndroid color="#3DDC84" /> },
        ],
    }
];

const SkillsAndTechnology = () => {
    const [viewMode, setViewMode] = React.useState('classic');

    const toggleView = () => {
        setViewMode(prev => prev === 'classic' ? 'sphere' : 'classic');
    };

    return (
        <section className="skills container section" id="skills">
            <h2 className="section__title">Skills & Technologies</h2>

            <div className="skills__view-toggle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <button
                    onClick={toggleView}
                    className="button button--flex"
                    style={{
                        margin: '0 auto',
                        padding: '0.75rem 2rem',
                        background: 'var(--title-color)',
                        color: 'var(--container-color)',
                        border: 'none',
                        borderRadius: '1rem',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: '0.3s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    {viewMode === 'classic' ? '🔮 Try 3D Sphere' : '📋 Back to List'}
                </button>
            </div>

            <div style={{ minHeight: viewMode === 'classic' ? 'auto' : '600px', transition: 'all 0.5s ease' }}>
                {viewMode === 'classic' && (
                    <div className="skills__list-container">
                        {skillsData.map(({ category, items }, index) => (
                            <motion.div
                                key={index}
                                className={`skills__box skills__box-${index % 5}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="skills__category-header">{category}</h3>
                                <div className="skills__items-wrapper">
                                    {items.map((skill, i) => (
                                        <div
                                            key={i}
                                            className="skill-3d-wrapper"
                                            style={{ perspective: 1000 }} // Essential for 3D effect
                                        >
                                            <Skill3D icon={skill.icon} name={skill.name} />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {viewMode === 'sphere' && (
                    <React.Suspense fallback={<div>Loading 3D Sphere...</div>}>
                        <FloatingSkills skills={skillsData} />
                    </React.Suspense>
                )}
            </div>
        </section>
    );
};

export default SkillsAndTechnology;
