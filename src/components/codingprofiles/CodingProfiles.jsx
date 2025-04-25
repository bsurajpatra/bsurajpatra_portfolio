import React from 'react';
import './CodingProfiles.css';
import codechefLogo from '../../assets/codechef.jpg'; 
import leetcodeLogo from '../../assets/leetcode.png'; 
import geeksforgeeksLogo from '../../assets/gfglogo.jpeg'; 

const CodingProfiles = () => {
    const codechefUsername = "klu_2300031514"; 
    const leetcodeUsername = "klu2300031514"; 
    const geeksforgeeksUsername = "user_n7dd51vjk9y"; 

    return (
        <section className="coding-profiles" id="coding-profiles">
            <h2 className="section__title">My Coding Profiles</h2>
            <div className="profiles">
                <div className="profile-card" aria-label="CodeChef Profile">
                    <img src={codechefLogo} alt="CodeChef Logo" className="profile-logo" />
                    <div className="profile-info">
                        <h3>CodeChef</h3>
                        <p className="username">{codechefUsername}</p>
                        <a href="https://www.codechef.com/users/klu_2300031514" target="_blank" rel="noopener noreferrer">
                            <button className="profile-button">Visit Profile</button>
                        </a>
                    </div>
                </div>
                <div className="profile-card" aria-label="LeetCode Profile">
                    <img src={leetcodeLogo} alt="LeetCode Logo" className="profile-logo" />
                    <div className="profile-info">
                        <h3>LeetCode</h3>
                        <p className="username">{leetcodeUsername}</p>
                        <a href="https://leetcode.com/u/klu2300031514/" target="_blank" rel="noopener noreferrer">
                            <button className="profile-button">Visit Profile</button>
                        </a>
                    </div>
                </div>
                <div className="profile-card" aria-label="GeeksforGeeks Profile">
                    <img src={geeksforgeeksLogo} alt="GeeksforGeeks Logo" className="profile-logo" />
                    <div className="profile-info">
                        <h3>GeeksforGeeks</h3>
                        <p className="username">{geeksforgeeksUsername}</p>
                        <a href="https://www.geeksforgeeks.org/user/user_n7dd51vjk9y/" target="_blank" rel="noopener noreferrer">
                            <button className="profile-button">Visit Profile</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodingProfiles;