import Cisco from '../../assets/cisco.png';
import Swecha from '../../assets/swecha.png';
import Teachnook from '../../assets/teachnook.png';
import CiscoCertificate from '../../assets/cisco-certificate.jpg';
import SwechaCertificate from '../../assets/swecha-certificate.jpg';
import TeachnookCertificate from '../../assets/teachnook-certificate.jpg';

const WorkExperience = [
    {
        id: 1,
        title: "Networking Intern",
        company: "Cisco Networking Academy",
        yearsActive: "May 2024 - August 2024",
        location: "Remote",
        image: { src: Cisco, style: { width: '100px', height: 'auto' } },
        certificate: { src: CiscoCertificate, style: { width: '100%', height: 'auto' } },
        information: [
            "Virtual internship at Cisco Networking Academy to enhance networking skills.",
            "Worked with Packet Tracer, configuring and troubleshooting over 17 network scenarios.",
            "Improved network performance and reliability through hands-on networking exercises."
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
    },
    {
        id: 3,
        title: "Data Science Intern",
        company: "Teachnook",
        yearsActive: "August 2023 - November 2023",
        location: "Remote",
        image: { src: Teachnook, style: { width: '100px', height: 'auto' } },
        certificate: { src: TeachnookCertificate, style: { width: '100%', height: 'auto' } },
        information: [
            "Gained hands-on experience in data analysis, machine learning, and visualization.",
            "Used Python, Pandas, NumPy, Matplotlib, and Scikit-learn to extract insights from real-world datasets.",
            "Built predictive models and developed a data-driven decision-making project."
        ],
    }
];

export default WorkExperience;