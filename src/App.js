import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import GitHub from './components/github/GitHub';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import useLocalStorage from 'use-local-storage'
import SkillsAndTechnology from './components/skillandtechnology/SkillsAndTechnology';
import Certifications from './components/certifications/Certifications';
import CodingProfiles from './components/codingprofiles/CodingProfiles';
import Research from './components/research/Research';
import Footer from './components/footer/Footer';
import Achievements from './components/achievements/Achievements';
import CoreLoader from './components/loader/CoreLoader';
import { AnimatePresence } from 'framer-motion';

function App() {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Always show loader on refresh as per user request for longer animation
        setIsLoading(true);

        const handleBeforeInstallPrompt = (e) => {
            // Prevent the mini-infobar from appearing on mobile
            // e.preventDefault();
            console.log('👍 ', 'beforeinstallprompt', e);
        };
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    }, []);

    const handleLoaderComplete = () => {
        setIsLoading(false);
    };

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <CoreLoader key="loader" onComplete={handleLoaderComplete} />
                )}
            </AnimatePresence>

            <div className="app" data-theme={theme} style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
                <Sidebar theme={theme} switchTheme={switchTheme} />
                <main className='main'>
                    <Home />
                    <About />
                    <Education />
                    <SkillsAndTechnology />
                    <Projects />
                    <Achievements />
                    <Certifications />
                    <CodingProfiles />
                    <GitHub />
                    <Research />
                    <Experience />
                    <Contact theme={theme} />
                    <Footer />
                </main>
            </div>
        </>
    );
}

export default App;
