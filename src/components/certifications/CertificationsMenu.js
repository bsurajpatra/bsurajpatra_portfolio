import Salesforce from "../../assets/salesforce.png";
import MongoDB from "../../assets/MongoDB.jpg";
import GitHub from "../../assets/GitHub Foundations.jpg";
import Lingua from "../../assets/lingua.jpg";
import nvidia from "../../assets/nvidiadl.jpg";
import awscp from "../../assets/awscp.jpg";
import scrum from "../../assets/scrum.jpg";

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
        title: "Salesforce Certified AI Associate",
        company: "Salesforce",
        certificate: {
            src: Salesforce,
            style: { width: '100%', height: 'auto' }
        }
    },
    {
        id: 5,
        title: "Linguaskill General - English Language Proficiency",
        company: "Cambridge University Press and Assessment",
        certificate: {
            src: Lingua,
            style: { width: '100%', height: 'auto' }
        }
    },
    {
        id: 6,
        title: "Fundamentals of Deep Learning",
        company: "NVIDIA",
        certificate: {
            src: nvidia,
            style: { width: '100%', height: 'auto' }
        }
    },
    {
        id: 7,
        title: "Scrum Fundamentals",
        company: "SCRUMstudy",
        certificate: {
            src: scrum,
            style: { width: '100%', height: 'auto' }
        }
    }
];

export default Menu;