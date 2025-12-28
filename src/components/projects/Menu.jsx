import KLEats from "../../assets/kleats.png";
import KarmaSync from "../../assets/KarmaSync.png";
import SafeWebVerify from "../../assets/safewebverify.jpg";
import KLEatsFinance from "../../assets/finance_kleats.png";
import FaceAttend from "../../assets/FaceAttend.png";
import SwatVsTheUndead from "../../assets/swatvstheundead.png";


const Menu = [
	{
		id: 1,
		image: KLEats,
		title: "KL Eats",
		category: ["Next.js, Node.js, MySQL"],
		url: "https://kleats.in/",
		repositoryUrl: "https://github.com/KLEats",
		description: "KL Eats makes campus dining easy with meal pre-ordering."
		
	},
	{
		id: 2,
		image: FaceAttend,
		title: "FaceAttend",
		category: ["React Native, Node.js, FaceNet, MongoDB"],
		url: "https://faceattendai.netlify.app/",
		repositoryUrl: "https://github.com/bsurajpatra/FaceAttend",
		description: "FaceAttend is a system that automates attendance using facial recognition."
	},
	{
		id: 3,
		image: KLEatsFinance,
		title: "KL Eats Finance",
		category: ["React + Vite, Node.js, MySQL"],
		url: "https://finance.kleats.in/",
		repositoryUrl: "https://github.com/KLEats/finance_kleats",
		description: "A finance management system for KL Eats."
	},
	{
		id: 4,
		image: SafeWebVerify,
		title: "SafeWebVerify",
		category: ["MERN, AI/ML"],
		url: null,
		repositoryUrl: "https://github.com/bsurajpatra/SafeWebVerify",
		description: "SafeWebVerify is an AI/ML-powered web app that detects phishing websites in real-time with 98% accuracy."
	},
	{
		id: 5,
		image: KarmaSync,
		title: "KarmaSync",
		category: ["MERN"],
		url: "https://karmasync.vercel.app/",
		repositoryUrl: "https://github.com/bsurajpatra/KarmaSync_info",
		description: "An intuitive project management tool to organize, assign, and complete tasks with ease."
	},
	{
		id: 6,
		image: SwatVsTheUndead,
		title: "SWAT vs the Undead",
		category: ["Game & UX"],
		url: "https://bsurajpatra.itch.io/swat-vs-the-undead",
		repositoryUrl: "https://github.com/bsurajpatra/swat-vs-the-undead",
		description: "A Unity and C# powered FPS survival game with wave-based zombie combat."
	},
	
];


export default Menu;


