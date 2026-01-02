import React from 'react';
import './Home.css';
import Me from '../../assets/Profession.jpg';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import { motion } from 'framer-motion';
import { RiCodeSLine, RiGamepadLine, RiOpenSourceFill } from 'react-icons/ri';

const Home = () => {
    const highlights = [
        {
            icon: <RiCodeSLine />,
            title: "Full Stack Developer",
            description: "Building scalable web applications"
        },
        {
            icon: <RiGamepadLine />,
            title: "Game Developer",
            description: "Creating immersive experiences"
        },
        {
            icon: <RiOpenSourceFill />,
            title: "FOSS Advocate",
            description: "Contributing to open source innovation"
        }
    ];

    return (
        <section className="home container" id='home'>
            <div className="home__content">
                <motion.div
                    className="home__img-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="home__img-border">
                        <img src={Me} alt="B Suraj Patra" className='home__img' />
                    </div>
                </motion.div>

                <motion.div
                    className="home__data"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 className="home__name">
                        Hi, I'm <span className="home__name-highlight">B Suraj Patra</span>
                    </h1>

                    <p className="home__description">
                        Early-Career Software Engineer <br />
                        Passionate about <span className="highlight-text">Free and Open Source</span> innovation
                    </p>

                    <div className="home__highlights">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                className="home__highlight-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="home__highlight-icon">{item.icon}</div>
                                <div className="home__highlight-info">
                                    <h3 className="home__highlight-title">{item.title}</h3>
                                    <p className="home__highlight-desc">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="home__buttons"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <a href="#contact" className="btn btn-primary">Get In Touch</a>
                        <a href="#projects" className="btn btn-secondary">View Projects</a>
                    </motion.div>
                </motion.div>
            </div>

            <ScrollDown />
            <Shapes />
        </section>
    )
}

export default Home