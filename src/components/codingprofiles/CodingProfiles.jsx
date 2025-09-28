import React from 'react';
import './CodingProfiles.css';
import codechefLogo from '../../assets/codechef.jpg'; 
import leetcodeLogo from '../../assets/leetcode.png'; 
import codeforcesLogo from '../../assets/codeforces.png';
import { motion } from "framer-motion";

const CodingProfiles = () => {
    const profiles = [
        {
            id: 1,
            platform: "CodeChef",
            username: "bsurajpatra",
            rank: "2*",
            logo: codechefLogo,
            url: "https://www.codechef.com/users/bsurajpatra"
        },
        {
            id: 2,
            platform: "LeetCode",
            username: "bsurajpatra1",
            rank: null,
            logo: leetcodeLogo,
            url: "https://leetcode.com/u/bsurajpatra1/"
        },
        {
            id: 3,
            platform: "CodeForces",
            username: "bsurajpatra",
            rank: "Newbie",
            logo: codeforcesLogo,
            url: "https://codeforces.com/profile/bsurajpatra"
        }
    ];

    return (
        <section className="coding-profiles container section" id="coding-profiles">
            <h2 className="section__title">My Coding Profiles</h2>

            <div className="coding-profiles__container grid">
                {profiles.map((profile) => (
                    <motion.div
                        layout
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="coding-profiles__card"
                        key={profile.id}
                    >
                        <div className="coding-profiles__info">
                            <img 
                                src={profile.logo} 
                                alt={`${profile.platform} Logo`} 
                                className="coding-profiles__logo" 
                            />
                            <h3 className="coding-profiles__title">{profile.platform}</h3>
                            <div className="coding-profiles__user">
                                <span className="coding-profiles__username">{profile.username}</span>
                                {profile.rank && (
                                    <span className={`coding-profiles__rank coding-profiles__rank--${profile.platform.replace(/\s+/g, '-').toLowerCase()}`}>{profile.rank}</span>
                                )}
                            </div>
                            <a 
                                className="coding-profiles__link"
                                href={profile.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <button className="coding-profiles__button">
                                    Visit Profile
                                </button>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};


export default CodingProfiles;
