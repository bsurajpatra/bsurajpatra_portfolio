"use client";

import React, { useEffect, useState } from 'react';
import '../src/App.css';
import Sidebar from '@/src/components/sidebar/Sidebar';
import Home from '@/src/components/home/Home';
import About from '@/src/components/about/About';
import useLocalStorage from 'use-local-storage';
import CoreLoader from '@/src/components/loader/CoreLoader';
import CustomCursor from '@/src/components/cursor/CustomCursor';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const Education = dynamic(() => import('@/src/components/education/Education'));
const Experience = dynamic(() => import('@/src/components/experience/Experience'));
const GitHub = dynamic(() => import('@/src/components/github/GitHub'));
const Projects = dynamic(() => import('@/src/components/projects/Projects'));
const Contact = dynamic(() => import('@/src/components/contact/Contact'));
const SkillsAndTechnology = dynamic(() => import('@/src/components/skillandtechnology/SkillsAndTechnology'));
const Certifications = dynamic(() => import('@/src/components/certifications/Certifications'));
const CodingProfiles = dynamic(() => import('@/src/components/codingprofiles/CodingProfiles'));
const Research = dynamic(() => import('@/src/components/research/Research'));
const Footer = dynamic(() => import('@/src/components/footer/Footer'));
const Achievements = dynamic(() => import('@/src/components/achievements/Achievements'));
const CommunityEngagement = dynamic(() => import('@/src/components/communityengagement/CommunityEngagement'));

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

            <div className="app" data-theme={theme} style={{ display: isLoading ? 'none' : 'block' }}>
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
