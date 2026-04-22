import React from 'react';
import './Home.css';
import Me from '../../assets/hero.png';
import Image from 'next/image';
import ScrollDown from './ScrollDown';
import dynamic from 'next/dynamic';

const Shapes = dynamic(() => import('./Shapes'), { ssr: false });
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
            icon: <RiOpenSourceFill />,
            title: "FOSS Advocate",
            description: "Contributing to open source innovation"
        }
    ];

    return (
        <section className="home container" id='home'>
            <div className="home__content">
                <motion.div
                    className="home__data"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
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
                                    <h2 className="home__highlight-title">{item.title}</h2>
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

                <div className="home__img-wrapper">
                    <div className="home__img-border">
                        <Image
                            src={Me}
                            alt="B Suraj Patra"
                            className='home__img'
                            priority
                            sizes="(max-width: 768px) 250px, (max-width: 1200px) 400px, 500px"
                        />
                    </div>
                </div>
            </div>

            <ScrollDown />
            <Shapes />
        </section>
    )
}

export default Home