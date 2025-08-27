import KLEats from "../../assets/kleats.png";
import Portfolio from "../../assets/portfolio.png";
import KarmaSync from "../../assets/KarmaSync.png";
import SafeWebVerify from "../../assets/safewebverify.jpg";
import AaharExpress from "../../assets/aaharexpress.png";
import KLEatsFinance from "../../assets/finance_kleats.png";


const Menu = [
	{
		id: 1,
		image: SafeWebVerify,
		title: "SafeWebVerify",
		category: ["MERN, AI/ML"],
		url: null,
		repositoryUrl: "https://github.com/bsurajpatra/SafeWebVerify",
		description: "SafeWebVerify is an AI/ML-powered web app that detects phishing websites in real-time with 98% accuracy."
	},
	{
		id: 2,
		image: KarmaSync,
		title: "KarmaSync",
		category: ["MERN"],
		url: "https://karmasync.vercel.app/",
		repositoryUrl: "https://github.com/bsurajpatra/KarmaSync_info",
		description: "An intuitive project management tool to organize, assign, and complete tasks with ease."
	},
	{
		id: 3,
		image: KLEats,
		title: "KL Eats",
		category: ["Next.js, Node.js, MySQL"],
		url: "https://kleats.in/",
		repositoryUrl: "https://github.com/KLEats",
		description: "KL Eats makes campus dining easy with meal pre-ordering."
	},
	{
		id: 4,
		image: Portfolio,
		title: "Personal Portfolio",
		category: ["React"],
		url: "https://bsurajpatra.me/",
		repositoryUrl: "https://github.com/bsurajpatra/bsurajpatra_portfolio",
		description: "A personal portfolio showcasing my skills, projects, and experience."
	},
	{
		id: 5,
		image: AaharExpress,
		title: "AaharExpress Demo",
		category: ["UI/UX"],
		url: "https://www.aaharexpressindia.me/",
		repositoryUrl: "https://github.com/bsurajpatra/AaharExpressDemo",
		description: "A demo showcasing the user interface and user experience design of the AaharExpress website."
	},
	{
		id: 6,
		image: KLEatsFinance,
		title: "KL Eats Finance",
		category: ["React + Vite, Node.js, MySQL"],
		url: "https://finance.kleats.in/",
		repositoryUrl: "https://github.com/KLEats/finance_kleats",
		description: "A finance management system for KL Eats."
	}
];


export default Menu;

