import KLEats from '../../assets/kleatslogo.png';
import Swecha from '../../assets/swecha.png';
import SwechaCertificate from '../../assets/swecha-certificate.jpg';

const WorkExperience = [
    {
        id: 1,
        title: "Scrum Master & Developer",
        company: "KL Eats",
        yearsActive: "July 2024 - Present",
        location: "Remote",
        image: { src: KLEats, style: { width: '100px', height: 'auto' } },
        information: [
            "Product of KLGLUG, Unit of Quitech Labs Pvt Ltd.",
            "Led agile development as Scrum Master, coordinating sprint planning, reviews, and team collaboration.",
            "Designed and developed features for a food ordering and payment platform using modern web technologies."
        ],
    },
    {
        id: 2,
        title: "Open Data Intern",
        company: "SwechaAP",
        yearsActive: "May 2024 - June 2024",
        location: "Remote",
        image: { src: Swecha, style: { width: '100px', height: 'auto' } },
        certificate: { src: SwechaCertificate, style: { width: '100%', height: 'auto' } },
        information: [
            "Worked with a non-profit organization that promotes Free and Open-Source Software (FOSS).",
            "Contributed to open-source data analytics & visualization projects.",
            "Collaborated with developers and researchers to improve data transparency and accessibility."
        ],
    }
];

export default WorkExperience;
