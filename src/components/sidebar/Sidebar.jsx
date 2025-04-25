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
    RiSettings3Line
} from "react-icons/ri";


const Sidebar = (props) => {
    const [toggle, showMenu] = useState(false);

    const toggleSidebar = () => {
        showMenu(!toggle);
    };

    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <RiHome2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <RiUser3Line />
                                </a>
                            </li>

                            
                            <li className="nav__item">
                                <a href="#experience" className="nav__link">
                                    <RiBriefcase2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#education" className="nav__link">
                                    <RiGraduationCapLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#skills" className="nav__link">
                                    <RiToolsLine />
                                </a>
                            </li>


                            <li className="nav__item">
                                <a href="#projects" className="nav__link">
                                    <RiStackLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#certifications" className="nav__link">
                                    <RiAwardLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#coding-profiles" className="nav__link">
                                    <RiCodeLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <RiChat3Line />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__controls">
                    <button onClick={() => { props.switchTheme(); showMenu(!toggle) }} className="nav__link footer__button">
                        {props.theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
                    </button>
                </div>
            </aside>

            <div className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={toggleSidebar}>
                <RiMenu2Line />
            </div>
        </>
    );
};

export default Sidebar;
