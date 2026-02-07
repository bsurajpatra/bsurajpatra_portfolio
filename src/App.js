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
import { AnimatePresence } from 'framer-motion';

function App() {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Always show loader on refresh as per user request for longer animation
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            // Small delay for mobile to ensure the initial paint happens before the heavy loader
            const timer = setTimeout(() => setIsLoading(true), 100);
            return () => clearTimeout(timer);
        } else {
            setIsLoading(true);
        }

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
