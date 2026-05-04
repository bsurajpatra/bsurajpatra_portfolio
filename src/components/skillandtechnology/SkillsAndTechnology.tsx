import React from 'react';
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

const exactStyles = `
.skills__list-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
}
.skills__box {
    padding: 2rem;
    border-radius: 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.05);
}
.skills__box:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
.skills__box-0 { background-color: #ffe8ee; border-left: 5px solid #ff4d79; }
.skills__box-1 { background-color: #e6f0ff; border-left: 5px solid #3399ff; }
.skills__box-2 { background-color: #e6fffa; border-left: 5px solid #00cc99; }
.skills__box-3 { background-color: #fff8e6; border-left: 5px solid #ffcc00; }
.skills__box-4 { background-color: #f3e6ff; border-left: 5px solid #9933ff; }

[data-theme="dark"] .skills__box-0 { background-color: rgba(255, 77, 121, 0.25); border-color: rgba(255, 77, 121, 0.8); border-left-width: 5px; }
[data-theme="dark"] .skills__box-1 { background-color: rgba(51, 153, 255, 0.25); border-color: rgba(51, 153, 255, 0.8); border-left-width: 5px; }
[data-theme="dark"] .skills__box-2 { background-color: rgba(0, 204, 153, 0.25); border-color: rgba(0, 204, 153, 0.8); border-left-width: 5px; }
[data-theme="dark"] .skills__box-3 { background-color: rgba(255, 204, 0, 0.25); border-color: rgba(255, 204, 0, 0.8); border-left-width: 5px; }
[data-theme="dark"] .skills__box-4 { background-color: rgba(153, 51, 255, 0.25); border-color: rgba(153, 51, 255, 0.8); border-left-width: 5px; }

.skills__category-header {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    color: var(--title-color);
    font-weight: var(--font-bold);
}
.skills__items-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 0.875rem;
}
.skills__pill {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0.5rem 1rem;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
    transition: 0.3s;
}
[data-theme="dark"] .skills__pill {
    background-color: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.05);
    color: var(--title-color);
}
.skills__pill:hover {
    transform: translateY(-2px);
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
[data-theme="dark"] .skills__pill:hover {
    background-color: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.2);
}
.skills__icon {
    font-size: 1.25rem;
    display: flex;
}
.skills__text {
    font-size: 0.938rem;
    color: var(--text-color);
    font-weight: var(--font-medium);
}
@media screen and (max-width: 576px) {
    .skills__list-container { grid-template-columns: 1fr; }
    .skills__box { padding: 1.5rem; }
    .skills__category-header { font-size: 1.15rem; margin-bottom: 1.25rem; }
    .skills__pill { padding: 0.4rem 0.75rem; }
    .skills__text { font-size: 0.875rem; }
}
@media screen and (max-width: 350px) {
    .skills__box { padding: 1.25rem; }
    .skills__items-wrapper { gap: 0.6rem; }
}
`;

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
            <style dangerouslySetInnerHTML={{ __html: exactStyles }} />
            
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
