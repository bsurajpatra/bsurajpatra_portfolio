import Swecha from '../../assets/swecha.png';
import SwechaCertificate from '../../assets/swecha-certificate.jpg';

const WorkExperience = [
    {
        id: 1,
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
