import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const NetworkLoader = dynamic(() => import('./NetworkLoader'), { ssr: false });

const loadingLines = [
    "Establishing Neural Uplink...",
    "Synchronizing Data Nodes...",
    "Optimizing Network Mesh...",
    "System Ready."
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
            }, 500);
            return () => clearTimeout(timer);
        } else {
            const finalTimer = setTimeout(() => {
                onComplete();
            }, 500);
            return () => clearTimeout(finalTimer);
        }
    }, [currentLine, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 w-screen h-screen bg-black flex justify-center items-center z-[100000] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
            {/* Cinematic Vignette (replaces ::before) */}
            <div
                className="absolute inset-0 pointer-events-none z-5"
                style={{
                    background: 'radial-gradient(circle, transparent 20%, rgba(0, 0, 0, 0.8) 100%)',
                }}
            />

            {/* Scanlines Effect (replaces ::after) */}
            <div
                className="absolute inset-0 pointer-events-none z-6 opacity-30"
                style={{
                    background: `linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.05), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.05))`,
                    backgroundSize: '100% 4px, 3px 100%',
                }}
            />

            <div className="relative flex flex-col items-center justify-center w-full h-full z-2">
                {/* Network Mesh Animation */}
                <React.Suspense fallback={
                    <div className="w-[100px] h-[100px] flex justify-center items-center relative">
                        <div className="w-[60px] h-[60px] border-3 border-[rgba(0,242,255,0.5)] rounded-full animate-ring-pulse" />
                    </div>
                }>
                    <NetworkLoader />
                </React.Suspense>

                {/* Text Animation */}
                <div className="absolute bottom-[15vh] left-0 w-full text-center z-30">
                    <AnimatePresence mode="wait">
                        {currentLine < loadingLines.length && (
                            <motion.p
                                key={currentLine}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="text-white text-[1.2rem] tracking-[3px] uppercase m-0 animate-text-flicker max-sm:text-[0.9rem] max-sm:tracking-[2px]"
                                style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(200, 220, 255, 0.15)' }}
                            >
                                {loadingLines[currentLine]}
                            </motion.p>
                        )}
                        {currentLine === loadingLines.length && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-[#00ffaa] text-[1.2rem] tracking-[3px] uppercase m-0 font-bold animate-text-flicker max-sm:text-[0.9rem] max-sm:tracking-[2px]"
                                style={{ textShadow: '0 0 10px rgba(0, 255, 170, 0.8), 0 0 30px rgba(0, 255, 170, 0.5), 0 0 60px rgba(0, 255, 170, 0.2)' }}
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
