import React from 'react';
import './Footer.css'; 
import Resume from '../../assets/resume.pdf';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__copyright">
                    &copy; {new Date().getFullYear()} B Suraj Patra. Licensed under the MIT License.
                </p>
                <p>
                    <a href="https://github.com/bsurajpatra/bsurajpatra_portfolio/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
                        View the MIT License
                    </a>
                </p>
                
            </div>
        </footer>
    );
};

export default Footer;