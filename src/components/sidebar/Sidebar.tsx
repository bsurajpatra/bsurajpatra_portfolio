import React, { useState } from "react";
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

const navItems = [
    { href: "#home", icon: RiHome2Line, tooltip: "Home" },
    { href: "#about", icon: RiUser3Line, tooltip: "About" },
    { href: "#education", icon: RiGraduationCapLine, tooltip: "Education" },
    { href: "#skills", icon: RiToolsLine, tooltip: "Skills" },
    { href: "#projects", icon: RiStackLine, tooltip: "Projects" },
    { href: "#experience", icon: RiBriefcase2Line, tooltip: "Experience" },
    { href: "#research", icon: RiBookOpenLine, tooltip: "Patents" },
    { href: "#achievements", icon: RiTrophyLine, tooltip: "Achievements" },
    { href: "#engagements", icon: RiGroupLine, tooltip: "Community Engagement" },
    { href: "#certifications", icon: RiAwardLine, tooltip: "Certifications" },
    { href: "#coding-profiles", icon: RiCodeLine, tooltip: "Coding Profiles" },
    { href: "#github", icon: RiBarChartLine, tooltip: "Developer Insights" },
    { href: "#contact", icon: RiChat3Line, tooltip: "Contact" }
];

const Sidebar = (props: any) => {
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
                if (toggle) showMenu(false);
            }
        }
    };

    return (
        <>
            <aside className={`fixed top-0 bg-[var(--body-color)] border-r border-[var(--border-color)] py-10 w-[110px] min-h-screen flex flex-col justify-center z-[11] transition-all duration-300 max-lg:-left-[110px] ${toggle ? "max-lg:left-0" : "left-0"}`}>
                <nav className="flex flex-col items-center w-full">
                    <div className="flex flex-col items-center w-full">
                        <ul className="flex flex-col gap-y-5 items-center w-full">
                            {navItems.map((item, index) => (
                                <li key={index} className="w-full flex justify-center">
                                    <a href={item.href} className="relative text-[1.5rem] font-bold text-[var(--title-color)] transition-colors duration-300 hover:text-[var(--first-color)] group flex items-center justify-center w-full" onClick={handleLinkClick} aria-label={item.tooltip}>
                                        <item.icon />
                                        <span 
                                            className="absolute left-[calc(100%+15px)] top-1/2 -translate-y-1/2 -translate-x-2 rounded-md font-medium whitespace-nowrap opacity-0 invisible transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)] group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 max-lg:hidden z-[100] pointer-events-none"
                                            style={{ backgroundColor: 'var(--title-color)', color: 'var(--body-color)', padding: '10px 24px', fontSize: '14px' }}
                                        >
                                            {item.tooltip}
                                            <span 
                                                className="absolute right-full top-1/2 -translate-y-1/2 border-[5px] border-transparent"
                                                style={{ borderRightColor: 'var(--title-color)' }}
                                            ></span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                            
                            {/* Theme Toggle Button */}
                            <li className="w-full flex justify-center">
                                <button
                                    onClick={() => { props.switchTheme(); showMenu(!toggle); }}
                                    className="bg-transparent font-bold text-[var(--title-color)] transition-colors duration-300 hover:text-[var(--first-color)] relative group flex items-center justify-center w-full"
                                    aria-label={props.theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
                                >
                                    {props.theme === "light" ? <RiMoonLine size={28} /> : <RiSunLine size={28} />}
                                    <span 
                                        className="absolute left-[calc(100%+15px)] top-1/2 -translate-y-1/2 -translate-x-2 rounded-md font-medium whitespace-nowrap opacity-0 invisible transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)] group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 max-lg:hidden z-[100] pointer-events-none"
                                        style={{ backgroundColor: 'var(--title-color)', color: 'var(--body-color)', padding: '10px 24px', fontSize: '14px' }}
                                    >
                                        {props.theme === "light" ? "Dark Mode" : "Light Mode"}
                                        <span 
                                            className="absolute right-full top-1/2 -translate-y-1/2 border-[5px] border-transparent"
                                            style={{ borderRightColor: 'var(--title-color)' }}
                                        ></span>
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>

            <button
                className={`fixed top-5 cursor-pointer h-[45px] w-[45px] rounded-full hidden justify-center items-center z-[100] transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] max-lg:flex hover:bg-[var(--first-color)] hover:text-white hover:-translate-y-[2px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] group ${
                    toggle 
                        ? 'left-[125px] bg-[var(--first-color)] text-white' 
                        : 'left-6 text-[var(--title-color)] ' + (props.theme === 'dark' ? 'bg-[var(--container-color)] border border-[var(--border-color)] shadow-[0_4px_20px_rgba(0,0,0,0.3)]' : 'bg-[var(--body-color)] border border-[var(--border-color)] shadow-[0_4px_12px_rgba(0,0,0,0.1)]')
                }`}
                onClick={toggleSidebar}
                aria-label={toggle ? "Close Navigation Menu" : "Open Navigation Menu"}
                type="button"
            >
                {toggle ? <RiCloseLine className="text-[1.4rem] transition-transform duration-300 group-hover:scale-110" /> : <RiMenu2Line className="text-[1.4rem] transition-transform duration-300 group-hover:scale-110" />}
            </button>
        </>
    );
};

export default Sidebar;
