import React from 'react';
import './Footer.css';


import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="footer">
            <motion.div
                className="footer__content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <p className="footer__copyright">
                    &copy; {new Date().getFullYear()} B Suraj Patra. Licensed under the MIT License.
                </p>
                <p>
                    <a href="https://github.com/bsurajpatra/bsurajpatra_portfolio/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
                        View the MIT License
                    </a>
                </p>

            </motion.div>
        </footer>
    );
};

export default Footer;