import Salesforce from "../../assets/salesforce.png";
import MongoDB from "../../assets/MongoDB.jpg";
import GitHub from "../../assets/GitHub Foundations.jpg";
import CIP from "../../assets/cip.png";
import GoogleIT from "../../assets/googleit.jpg";
import MetaFront from "../../assets/MetaFront.jpg";
import NxtWave from "../../assets/nxtwave.png";
import Lingua from "../../assets/lingua.jpg";
import RedHat from "../../assets/redhat.jpg";
import Spring from "../../assets/Spring.jpg";
import nvidia from "../../assets/nvidiadl.jpg";
import awscp from "../../assets/awscp.jpg";

const Menu = [
    {
        id: 1,
        title: "AWS Certified Cloud Practitioner",
        company: "Amazon Web Services",
        certificate: {
            src: awscp,
            style: { width: '100%', height: 'auto' }
        }
    },
    {
        id: 2,
        title: "GitHub Foundations",
        company: "GitHub",
        certificate: {
            src: GitHub,
            style: { width: '100%', height: 'auto' }
        }
    },
    {
        id: 3,
        title: "MongoDB Certified Associate Developer",
        company: "MongoDB",
        certificate: {
            src: MongoDB,
            style: { width: '100%', height: 'auto' }
        }
    },
    {
        id: 4,
        title: "Red Hat Academy - Program Learner",
        company: "Red Hat",
        certificate: {
            src: RedHat,
            style: { width: '100%', height: 'auto' }
        }
    },
    {
        id: 5,
        title: "Salesforce Certified AI Associate",
        company: "Salesforce",
        certificate: {
            src: Salesforce,
            style: { width: '100%', height: 'auto' }
        }
    },
    {
        id: 6,
        title: "Spring Framework",
        company: "LearnQuest - Coursera",
        certificate: {
            src: Spring,
            style: { width: '100%', height: 'auto' }
        }
    },
    {
        id: 7,
        title: "IT Support Professional",
        company: "Google - Coursera",
        certificate: {
            src: GoogleIT,
            style: { width: '100%', height: 'auto' }
        }
    },
    {
        id: 8,
        title: "AI for Students: Build Your Own Generative AI Model",
        company: "NxtWave",
        certificate: {
            src: NxtWave,
            style: { width: '100%', height: 'auto' }
        }
    },
    {
        id: 9,
        title: "Front-end Developer",
        company: "Meta - Coursera",
        certificate: {
            src: MetaFront,
            style: { width: '100%', height: 'auto' }
        }
    },
    {
        id: 10,
        title: "Linguaskill General - English Language Proficiency",
        company: "Cambridge University Press and Assessment",
        certificate: {
            src: Lingua,
            style: { width: '100%', height: 'auto' }
        }
    },
    {
        id: 11,
        title: "Fundamentals of Deep Learning",
        company: "NVIDIA",
        certificate: {
            src: nvidia,
            style: { width: '100%', height: 'auto' }
        }
    },
    {
        id: 12,
        title: "Critical Infrastructure Protection",
        company: "OPSWAT Academy",
        certificate: {
            src: CIP,
            style: { width: '100%', height: 'auto' }
        }
    }
];

export default Menu;