import Cisco from '../../assets/cisco.png';
import Swecha from '../../assets/swecha.png';
import EduSkills from '../../assets/eduskills.png';
import CiscoCertificate from '../../assets/cisco-certificate.jpg';
import SwechaCertificate from '../../assets/swecha-certificate.jpg';
import EduSkillsCertificate from '../../assets/android.jpg';

const WorkExperience = [
    {
        id: 1,
        title: "Android Developer Intern",
        company: "EduSkills Foundation",
        yearsActive: "April 2025 - June 2025",
        location: "Remote",
        image: { src: EduSkills, style: { width: '130px', height: 'auto' } },
        certificate: { src: EduSkillsCertificate, style: { width: '100%', height: 'auto' } },
        information: [
            "Gained hands-on experience in designing and building modern Android applications.",
            "Worked extensively with Kotlin, Android Studio, and Jetpack Compose.",
            "Developed intuitive and responsive user interfaces.",
            "Strengthened understanding of Android app architecture and development best practices."
        ],
    },
    {
        id: 2,
        title: "Networking Intern",
        company: "Cisco Networking Academy",
        yearsActive: "May 2024 - August 2024",
        location: "Remote",
        image: { src: Cisco, style: { width: '100px', height: 'auto' } },
        certificate: { src: CiscoCertificate, style: { width: '100%', height: 'auto' } },
        information: [
            "Virtual internship at Cisco Networking Academy to enhance networking skills.",
            "Worked with Packet Tracer, configuring and troubleshooting diverse network setups.",
            "Improved network performance and reliability through hands-on networking exercises."
        ],
    },
    {
        id: 3,
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