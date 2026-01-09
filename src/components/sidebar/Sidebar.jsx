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
    RiTrophyLine
} from "react-icons/ri";

const Sidebar = (props) => {
    const [toggle, showMenu] = useState(false);

    const toggleSidebar = () => {
        showMenu(!toggle);
    };

    return (
        <>
            <aside className={toggle ? "aside show-menu" : "aside"}>
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">

                            <li className="nav__item">
                                <a href="#home" className="nav__link" data-tooltip="Home">
                                    <RiHome2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link" data-tooltip="About">
                                    <RiUser3Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#education" className="nav__link" data-tooltip="Education">
                                    <RiGraduationCapLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#skills" className="nav__link" data-tooltip="Skills">
                                    <RiToolsLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#projects" className="nav__link" data-tooltip="Projects">
                                    <RiStackLine />
                                </a>
                            </li>

                            {/* <li className="nav__item">
                                <a href="#engagements" className="nav__link" data-tooltip="Community Engagement">
                                    <RiGroupLine />
                                </a>
                            </li> */}

                            <li className="nav__item">
                                <a href="#experience" className="nav__link" data-tooltip="Experience">
                                    <RiBriefcase2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#research" className="nav__link" data-tooltip="Patents">
                                    <RiBookOpenLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#achievements" className="nav__link" data-tooltip="Achievements">
                                    <RiTrophyLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#certifications" className="nav__link" data-tooltip="Certifications">
                                    <RiAwardLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#coding-profiles" className="nav__link" data-tooltip="Coding Profiles">
                                    <RiCodeLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#github" className="nav__link" data-tooltip="Developer Insights">
                                    <RiBarChartLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#contact" className="nav__link" data-tooltip="Contact">
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
                    >
                        {props.theme === "light" ? <RiMoonLine /> : <RiSunLine />}
                    </button>
                </div>
            </aside>

            <div
                className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
                onClick={toggleSidebar}
            >
                <RiMenu2Line />
            </div>
        </>
    );
};

export default Sidebar;
