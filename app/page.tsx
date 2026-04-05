"use client";

import React, { useEffect, useState } from 'react';
import '../src/App.css';
import Sidebar from '@/src/components/sidebar/Sidebar';
import Home from '@/src/components/home/Home';
import About from '@/src/components/about/About';
import Education from '@/src/components/education/Education';
import Experience from '@/src/components/experience/Experience';
import GitHub from '@/src/components/github/GitHub';
import Projects from '@/src/components/projects/Projects';
import Contact from '@/src/components/contact/Contact';
import useLocalStorage from 'use-local-storage';
import SkillsAndTechnology from '@/src/components/skillandtechnology/SkillsAndTechnology';
import Certifications from '@/src/components/certifications/Certifications';
import CodingProfiles from '@/src/components/codingprofiles/CodingProfiles';
import Research from '@/src/components/research/Research';
import Footer from '@/src/components/footer/Footer';
import Achievements from '@/src/components/achievements/Achievements';
import CommunityEngagement from '@/src/components/communityengagement/CommunityEngagement';
import CoreLoader from '@/src/components/loader/CoreLoader';
import CustomCursor from '@/src/components/cursor/CustomCursor';
import { AnimatePresence } from 'framer-motion';

export default function Page() {
    const [isMounted, setIsMounted] = useState(false);
    // Default to 'light'. If no theme was ever set (localStorage key absent), 'light' is used.
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsMounted(true);
        const migrated = localStorage.getItem('theme-v2');
        if (!migrated) {
            setTheme('light');
            localStorage.setItem('theme-v2', 'done');
        }
    }, [setTheme]);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e: any) => {
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

    if (!isMounted) {
        return null; // Or a simple skeleton/background
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
