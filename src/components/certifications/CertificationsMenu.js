import Salesforce from "../../assets/salesforce.png";
import MongoDB from "../../assets/MongoDB.jpg";
import GitHub from "../../assets/GitHub Foundations.jpg";
import Lingua from "../../assets/lingua.jpg";
import nvidia from "../../assets/nvidiadl.jpg";
import awscp from "../../assets/awscp.jpg";
import scrum from "../../assets/scrum.jpg";
import unity from "../../assets/Unity.jpg";

const imgStyle = { width: "100%", height: "auto" };

const Menu = [
    {
        id: 1,
        title: "AWS Certified Cloud Practitioner",
        company: "Amazon Web Services",
        certificate: {
            src: awscp,
            style: imgStyle
        }
    },
    {
        id: 2,
        title: "GitHub Foundations",
        company: "GitHub",
        certificate: {
            src: GitHub,
            style: imgStyle
        }
    },
    {
        id: 3,
        title: "MongoDB Certified Associate Developer",
        company: "MongoDB",
        certificate: {
            src: MongoDB,
            style: imgStyle
        }
    },
    {
        id: 4,
        title: "Unity Certified User Programmer",
        company: "Unity",
        certificate: {
            src: unity,
            style: imgStyle
        }
    },
    {
        id: 5,
        title: "Salesforce Certified AI Associate",
        company: "Salesforce",
        certificate: {
            src: Salesforce,
            style: imgStyle
        }
    },
    {
        id: 6,
        title: "Linguaskill General - English Language Proficiency",
        company: "Cambridge University Press and Assessment",
        certificate: {
            src: Lingua,
            style: imgStyle
        }
    },
    {
        id: 7,
        title: "Fundamentals of Deep Learning",
        company: "NVIDIA",
        certificate: {
            src: nvidia,
            style: imgStyle
        }
    },
    {
        id: 8,
        title: "Scrum Fundamentals",
        company: "SCRUMstudy",
        certificate: {
            src: scrum,
            style: imgStyle
        }
    }
];

export default Menu;
