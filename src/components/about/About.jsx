import React from 'react';
import './About.css';
import Image from '../../assets/about-profile.jpg';
import { motion } from 'framer-motion';
import { RiUser3Line, RiMapPinUserLine, RiHeartsLine, RiTerminalBoxLine } from 'react-icons/ri';

const About = () => {
    const downloadResume = () => {
        window.open('https://resume.bsurajpatra.me', '_blank');
    }

    const traits = [
        {
            icon: <RiUser3Line />,
            title: "Who I Am",
            text: "CSE Student @ KLU"
        },
        {
            icon: <RiMapPinUserLine />,
            title: "Where I'm From",
            text: "Odisha → Andhra Pradesh"
        },
        {
            icon: <RiTerminalBoxLine />,
            title: "What I Do",
            text: "Full Stack & Games"
        },
        {
            icon: <RiHeartsLine />,
            title: "Passions",
            text: "FOSS Advocate"
        }
    ];

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container">
                <motion.div
                    className="about__image-container"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="about__img-wrapper">
                        <img src={Image} alt="Suraj" className='about__img' />
                        <div className="about__img-accents">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="about__content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="about__text-content">
                        <h3 className="about__subtitle">
                            Bridging Design and Engineering with <span className="text-gradient">Innovation</span>
                        </h3>
                        <p className="about__description">
                            Hi, I'm <strong>Suraj</strong>, a Computer Science and Engineering student at K L University.
                            My journey is driven by <strong>Honors through Experiential Learning</strong>,
                            specializing in the intersection of <strong>Game Development</strong> and <strong>UX Design</strong>.
                        </p>
                        <p className="about__description">
                            Based in Vijayawada and originally from Odisha, I thrive on tackling complex challenges
                            and contributing to the <strong>FOSS</strong> community. I'm a strong team player focused on
                            building software that makes a real-world impact.
                        </p>
                    </div>

                    <div className="about__traits">
                        {traits.map((trait, index) => (
                            <motion.div
                                className="about__trait-card"
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <span className="about__trait-icon">{trait.icon}</span>
                                <div className="about__trait-info">
                                    <h4 className="about__trait-title">{trait.title}</h4>
                                    <p className="about__trait-text">{trait.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="about__cta">
                        <button className="btn btn-about" onClick={downloadResume}>
                            Resume
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
