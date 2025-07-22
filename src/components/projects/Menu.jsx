import KLEats from "../../assets/kleats.png";
import Portfolio from "../../assets/portfolio.png";
import KarmaSync from "../../assets/KarmaSync.png";
import SafeWebVerify from "../../assets/safewebverify.jpg";
import AaharExpress from "../../assets/aaharexpress.png";


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
		category: ["EJS, Node.js"],
		url: "https://kleats.in/",
		repositoryUrl: null,
		description: "KL Eats makes campus dining easy with meal pre-ordering."
	},
	{
		id: 4,
		image: Portfolio,
		title: "Personal Portfolio",
		category: ["React"],
		url: "https://bsurajpatra-portfolio.vercel.app/",
		repositoryUrl: "https://github.com/bsurajpatra/bsurajpatra_portfolio",
		description: "A personal portfolio showcasing my skills, projects, and experience."
	},
	{
		id: 5,
		image: AaharExpress,
		title: "AaharExpress Demo",
		category: ["UI/UX"],
		url: null,
		repositoryUrl: "https://github.com/bsurajpatra/AaharExpressDemo",
		description: "A demo showcasing the user interface and user experience design of the AaharExpress website."
	}
];


export default Menu;
