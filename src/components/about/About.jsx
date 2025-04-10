import React from 'react';
import './About.css';
import Image from '../../assets/about-profile.jpg';
import Resume from '../../assets/resume.pdf';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Hi, I'm Suraj, a Computer Science and Engineering student at KL University (Honors through Experiential Learning) with specialization in Cross-Platform Development Frameworks. Originally from Koraput, Odisha, I'm currently based in Vijayawada, Andhra Pradesh.

I'm passionate about learning, tackling new challenges, and contributing to the Free and Open Source Software (FOSS) community. My focus is on expanding my portfolio with real-world projects while being a strong team player.
                        </p>
                        <button className="btn download-resume" onClick={downloadResume}>Download Resume</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About