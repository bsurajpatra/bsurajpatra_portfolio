import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import './CoreLoader.css';

const DNALoader = dynamic(() => import('./DNALoader'), { ssr: false });

const loadingLines = [
    "Sequencing Genetic Blueprint...",
    "Calibrating Neural Pathways...",
    "Synthesizing Synaptic Bridges...",
    "Optimizing Cognitive Architecture...",
    "Activating Bio-Digital Interface...",
    "Synthesis Complete. Welcome."
];

const CoreLoader = ({ onComplete }) => {
    const [currentLine, setCurrentLine] = useState(0);

    useEffect(() => {
        // Disable scrolling on body
        document.body.style.overflow = 'hidden';
        // Scroll to top to ensure user starts at Home page
        window.scrollTo(0, 0);

        return () => {
            // Restore scrolling
            document.body.style.overflow = '';
        };
    }, []);

    useEffect(() => {
        if (currentLine < loadingLines.length) {
            const timer = setTimeout(() => {
                setCurrentLine(prev => prev + 1);
            }, 600); 
            return () => clearTimeout(timer);
        } else {
            const finalTimer = setTimeout(() => {
                onComplete();
            }, 1000); 
            return () => clearTimeout(finalTimer);
        }
    }, [currentLine, onComplete]);

    return (
        <motion.div
            className="core-loader-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
            <div className="reactor-container">
                {/* DNA Strand Animation */}
                <React.Suspense fallback={
                    <div className="loader-placeholder">
                        <div className="pulse-ring"></div>
                    </div>
                }>
                    <DNALoader />
                </React.Suspense>

                {/* Text Animation */}
                <div className="loader-text-container">
                    <AnimatePresence mode="wait">
                        {currentLine < loadingLines.length && (
                            <motion.p
                                key={currentLine}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="loader-text"
                            >
                                {loadingLines[currentLine]}
                            </motion.p>
                        )}
                        {currentLine === loadingLines.length && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="loader-text success"
                            >
                                System online ✓
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

export default CoreLoader;
