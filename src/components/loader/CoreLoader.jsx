import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CoreLoader.css';

const loadingLines = [
    "Initializing core engine...",
    "Loading system modules...",
    "Analysing data structures...",
    "Syncing neural nodes...",
    "Rendering interface...",
    "Initializing security protocols..."
];

const CoreLoader = ({ onComplete }) => {
    const [currentLine, setCurrentLine] = useState(0);

    useEffect(() => {
        if (currentLine < loadingLines.length) {
            const timer = setTimeout(() => {
                setCurrentLine(prev => prev + 1);
            }, 800);
            return () => clearTimeout(timer);
        } else {
            const finalTimer = setTimeout(() => {
                onComplete();
            }, 1000);
            return () => clearTimeout(finalTimer);
        }
    }, [currentLine, onComplete, loadingLines.length]);

    return (
        <motion.div
            className="core-loader-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
            <div className="reactor-container">
                {/* Reactor Core Visuals */}
                <div className="reactor-core">
                    <div className="ring ring-1"></div>
                    <div className="ring ring-2"></div>
                    <div className="ring ring-3"></div>
                    <div className="core-inner">
                        <div className="core-glow"></div>
                    </div>
                    <div className="energy-lines">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className={`energy-line line-${i}`}></div>
                        ))}
                    </div>
                </div>

                {/* HUD Elements */}
                <div className="hud-lines">
                    <div className="hud-arc-top"></div>
                    <div className="hud-arc-bottom"></div>
                </div>

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
