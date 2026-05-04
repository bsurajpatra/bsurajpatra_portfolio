import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer
            style={{
                backgroundColor: 'var(--first-color)',
                color: '#fff',
                padding: '1rem 0',
                textAlign: 'center',
                marginTop: 'auto'
            }}
        >
            <div
                style={{
                    maxWidth: '1080px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}
            >
                <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9, fontWeight: 500, letterSpacing: '0.5px' }}>
                    Made with 🤍 by B Suraj Patra
                </p>
            </div>
        </footer>
    );
};

export default Footer;