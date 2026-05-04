import React from 'react';
import codechefLogo from '../../assets/codechef.webp';
import leetcodeLogo from '../../assets/leetcode.webp';
import codeforcesLogo from '../../assets/codeforces.webp';
import { motion } from "framer-motion";
import { RiExternalLinkLine, RiStarFill, RiMedalLine, RiAwardLine } from 'react-icons/ri';
import Image from 'next/image';

const CodingProfiles = () => {
    const profiles = [
        {
            id: 1,
            platform: "CodeChef",
            username: "bsurajpatra",
            rank: "1500+",
            logo: codechefLogo,
            url: "https://www.codechef.com/users/bsurajpatra",
            color: "#5B4638",
            icon: <RiStarFill style={{ fontSize: '18px' }} />
        },
        {
            id: 2,
            platform: "LeetCode",
            username: "bsurajpatra1",
            rank: "1700+",
            logo: leetcodeLogo,
            url: "https://leetcode.com/u/bsurajpatra1/",
            color: "#FFA116",
            icon: <RiMedalLine style={{ fontSize: '18px' }} />
        },
        {
            id: 3,
            platform: "CodeForces",
            username: "bsurajpatra",
            rank: "1050+",
            logo: codeforcesLogo,
            url: "https://codeforces.com/profile/bsurajpatra",
            color: "#1F8ACB",
            icon: <RiAwardLine style={{ fontSize: '18px' }} />
        }
    ];

    return (
        <section className="container section" id="coding-profiles">
            <h2 className="section__title">Coding Profiles</h2>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '2rem', 
                paddingTop: '2rem',
                width: '100%'
            }}>
                {profiles.map((profile, index) => (
                    <motion.div
                        key={profile.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: 'var(--container-color)',
                            border: '1px solid rgba(150, 150, 150, 0.15)',
                            borderRadius: '1.25rem',
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        {/* Top Info Section */}
                        <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                backgroundColor: '#fff',
                                borderRadius: '1rem',
                                padding: '0.5rem',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}>
                                <Image
                                    src={profile.logo}
                                    alt={profile.platform}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--title-color)', margin: 0, padding: 0 }}>
                                    {profile.platform}
                                </h3>
                                <span style={{ fontSize: '0.875rem', color: 'var(--text-color)', marginTop: '0.25rem' }}>
                                    @{profile.username}
                                </span>
                            </div>
                        </div>

                        {/* Rank Badge Section */}
                        <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                backgroundColor: `${profile.color}15`,
                                padding: '0.8rem 1rem',
                                borderRadius: '0.75rem',
                                border: `1px solid ${profile.color}30`
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: profile.color }}>
                                    {profile.icon}
                                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Current Rating</span>
                                </div>
                                <span style={{ fontSize: '1rem', fontWeight: 'bold', color: profile.color }}>
                                    {profile.rank}
                                </span>
                            </div>
                        </div>

                        {/* Visit Button Section */}
                        <motion.a
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ filter: 'brightness(1.15)' }}
                            style={{
                                marginTop: 'auto',
                                width: '100%',
                                backgroundColor: profile.color,
                                color: '#fff',
                                padding: '1.25rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                fontSize: '0.85rem',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                textDecoration: 'none'
                            }}
                        >
                            Visit Profile
                            <RiExternalLinkLine style={{ fontSize: '1.1rem' }} />
                        </motion.a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CodingProfiles;
