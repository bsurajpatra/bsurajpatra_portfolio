import React from 'react';
import './CodingProfiles.css';
import codechefLogo from '../../assets/codechef.jpg'; 
import leetcodeLogo from '../../assets/leetcode.png'; 
import geeksforgeeksLogo from '../../assets/gfglogo.jpeg'; 
import { motion } from "framer-motion";

const CodingProfiles = () => {
    const profiles = [
        {
            id: 1,
            platform: "CodeChef",
            username: "klu_2300031514",
            logo: codechefLogo,
            url: "https://www.codechef.com/users/klu_2300031514"
        },
        {
            id: 2,
            platform: "LeetCode",
            username: "klu2300031514",
            logo: leetcodeLogo,
            url: "https://leetcode.com/u/klu2300031514/"
        },
        {
            id: 3,
            platform: "GeeksforGeeks",
            username: "bsurajpatra",
            logo: geeksforgeeksLogo,
            url: "https://www.geeksforgeeks.org/user/bsurajpatra/"
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
                            <p className="coding-profiles__username">{profile.username}</p>
                            <a 
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