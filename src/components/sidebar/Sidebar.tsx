import React, { useState } from "react";
import "./Sidebar.css";

import {
    RiHome2Line,
    RiUser3Line,
    RiBriefcase2Line,
    RiStackLine,
    RiChat3Line,
    RiGraduationCapLine,
    RiMoonLine,
    RiSunLine,
    RiMenu2Line,
    RiCodeLine,
    RiAwardLine,
    RiToolsLine,
    RiBookOpenLine,
    RiBarChartLine,
    RiTrophyLine,
    RiGroupLine,
    RiCloseLine
} from "react-icons/ri";

const Sidebar = (props) => {
    const [toggle, showMenu] = useState(false);

    const toggleSidebar = () => {
        showMenu(!toggle);
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const targetId = e.currentTarget.getAttribute('href');
        if (targetId?.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (toggle) showMenu(false);
            }
        }
    };

    return (
        <>
            <aside className={toggle ? "aside show-menu" : "aside"}>
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">

                            <li className="nav__item">
                                <a href="#home" className="nav__link" data-tooltip="Home" onClick={handleLinkClick} aria-label="Home">
                                    <RiHome2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link" data-tooltip="About" onClick={handleLinkClick} aria-label="About">
                                    <RiUser3Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#education" className="nav__link" data-tooltip="Education" onClick={handleLinkClick} aria-label="Education">
                                    <RiGraduationCapLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#skills" className="nav__link" data-tooltip="Skills" onClick={handleLinkClick} aria-label="Skills">
                                    <RiToolsLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#projects" className="nav__link" data-tooltip="Projects" onClick={handleLinkClick} aria-label="Projects">
                                    <RiStackLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#experience" className="nav__link" data-tooltip="Experience" onClick={handleLinkClick} aria-label="Experience">
                                    <RiBriefcase2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#research" className="nav__link" data-tooltip="Patents" onClick={handleLinkClick} aria-label="Patents">
                                    <RiBookOpenLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#achievements" className="nav__link" data-tooltip="Achievements" onClick={handleLinkClick} aria-label="Achievements">
                                    <RiTrophyLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#engagements" className="nav__link" data-tooltip="Community Engagement" onClick={handleLinkClick} aria-label="Community Engagement">
                                    <RiGroupLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#certifications" className="nav__link" data-tooltip="Certifications" onClick={handleLinkClick} aria-label="Certifications">
                                    <RiAwardLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#coding-profiles" className="nav__link" data-tooltip="Coding Profiles" onClick={handleLinkClick} aria-label="Coding Profiles">
                                    <RiCodeLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#github" className="nav__link" data-tooltip="Developer Insights" onClick={handleLinkClick} aria-label="Developer Insights">
                                    <RiBarChartLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#contact" className="nav__link" data-tooltip="Contact" onClick={handleLinkClick} aria-label="Contact">
                                    <RiChat3Line />
                                </a>
                            </li>

                        </ul>
                    </div>
                </nav>

                <div className="nav__controls">
                    <button
                        onClick={() => { props.switchTheme(); showMenu(!toggle); }}
                        className="nav__link footer__button"
                        data-tooltip={props.theme === "light" ? "Dark Mode" : "Light Mode"}
                        aria-label={props.theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
                    >
                        {props.theme === "light" ? <RiMoonLine /> : <RiSunLine />}
                    </button>
                </div>
            </aside>

            <button
                className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
                onClick={toggleSidebar}
                aria-label={toggle ? "Close Navigation Menu" : "Open Navigation Menu"}
                type="button"
            >
                {toggle ? <RiCloseLine /> : <RiMenu2Line />}
            </button>
        </>
    );
};

export default Sidebar;
