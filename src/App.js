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
import CommunityEngagement from './components/communityengagement/CommunityEngagement';
import CoreLoader from './components/loader/CoreLoader';
import CustomCursor from './components/cursor/CustomCursor';
import { AnimatePresence } from 'framer-motion';

function App() {
    // Default to 'light'. If no theme was ever set (localStorage key absent), 'light' is used.
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const [isLoading, setIsLoading] = useState(true);

    // One-time migration: force reset theme to 'light' for any user
    // who had 'dark' saved without explicitly choosing it.
    // The migration flag 'theme-v2' ensures this runs only once per device.
    useEffect(() => {
        const migrated = localStorage.getItem('theme-v2');
        if (!migrated) {
            setTheme('light');
            localStorage.setItem('theme-v2', 'done');
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
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

            {!isLoading && <CustomCursor />}

            <div className="app" data-theme={theme} style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
                <Sidebar theme={theme} switchTheme={switchTheme} />
                <main className='main'>
                    <Home />
                    <About />
                    <Education />
                    <SkillsAndTechnology />

                    <Projects />
                    <Experience />
                    <Research />
                    <Achievements />
                    <CommunityEngagement />
                    <Certifications />
                    <CodingProfiles />
                    <GitHub />
                    <Contact theme={theme} />
                    <Footer />

                </main>
            </div>
        </>
    );
}

export default App;
