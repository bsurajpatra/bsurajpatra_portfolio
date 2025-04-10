import React from 'react';
import './Footer.css'; 
import Resume from '../../assets/resume.pdf';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__copyright">&copy; {new Date().getFullYear()} B Suraj Patra. All rights reserved.</p>
                <div className="footer__links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#certifications">Certifications</a>
                    <a href={Resume} download className="footer__resume-button">Resume</a>
                </div>
                <div className="footer__socials">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;