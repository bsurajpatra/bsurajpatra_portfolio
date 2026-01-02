import React from 'react';
import './CodingProfiles.css';
import codechefLogo from '../../assets/codechef.jpg';
import leetcodeLogo from '../../assets/leetcode.png';
import codeforcesLogo from '../../assets/codeforces.png';
import { motion } from "framer-motion";
import { RiExternalLinkLine, RiStarFill, RiMedalLine, RiAwardLine } from 'react-icons/ri';

const CodingProfiles = () => {
    const profiles = [
        {
            id: 1,
            platform: "CodeChef",
            username: "bsurajpatra",
            rank: "2*",
            logo: codechefLogo,
            url: "https://www.codechef.com/users/bsurajpatra",
            color: "#5B4638",
            accent: "#7B3F00",
            icon: <RiStarFill />
        },
        {
            id: 2,
            platform: "LeetCode",
            username: "bsurajpatra1",
            logo: leetcodeLogo,
            url: "https://leetcode.com/u/bsurajpatra1/",
            color: "#FFA116",
            accent: "#f89f1b",
            icon: <RiMedalLine />
        },
        {
            id: 3,
            platform: "CodeForces",
            username: "bsurajpatra",
            rank: "Newbie",
            logo: codeforcesLogo,
            url: "https://codeforces.com/profile/bsurajpatra",
            color: "#1F8ACB",
            accent: "#4a90e2",
            icon: <RiAwardLine />
        }
    ];

    return (
        <section className="coding-profiles container section" id="coding-profiles">
            <h2 className="section__title">Coding Profiles</h2>

            <div className="coding-profiles__container grid">
                {profiles.map((profile, index) => (
                    <motion.div
                        className="profile__card"
                        key={profile.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="profile__card-header" style={{ '--accent-color': profile.color }}>
                            <div className="profile__logo-wrapper">
                                <img
                                    src={profile.logo}
                                    alt={profile.platform}
                                    className="profile__logo"
                                />
                            </div>
                            <div className="profile__header-info">
                                <h3 className="profile__platform">{profile.platform}</h3>
                                <div className="profile__meta">
                                    <span className="profile__username">@{profile.username}</span>
                                    {profile.rank && (
                                        <span className="profile__rank-badge" style={{ backgroundColor: `${profile.color}30`, color: '#fff' }}>
                                            {profile.rank}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="profile__card-body">
                            {/* Empty body to maintain consistent spacing or for future stats */}
                        </div>

                        <a
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile__visit-btn"
                            style={{ backgroundColor: profile.color }}
                        >
                            Visit Profile <RiExternalLinkLine />
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CodingProfiles;
