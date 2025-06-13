import KLEats from "../../assets/kleats.png";
import Portfolio from "../../assets/portfolio.png";
import KarmaSync from "../../assets/KarmaSync.png";

const Menu = [
	{
		id: 1,
		image: KLEats,
		title: "KL Eats",
		category: ["EJS, Node.js"],
		url: "https://kleats.in/",
		repositoryUrl: null,
		description: "KL Eats makes campus dining easy with meal pre-ordering."
	},
	{
		id: 2,
		image: Portfolio,
		title: "Personal Portfolio",
		category: ["MERN"],
		url: "https://bsurajpatra-portfolio.vercel.app/",
		repositoryUrl: "https://github.com/bsurajpatra/bsurajpatra_portfolio",
		description: "A personal portfolio showcasing my skills, projects, and experience."
	},
	{
		id: 3,
		image: KarmaSync,
		title: "KarmaSync",
		category: ["MERN"],
		url: "",
		repositoryUrl: "https://github.com/bsurajpatra/KarmaSync",
		description: "An intuitive project management tool to organize, assign, and complete tasks with ease."
	}
];

export default Menu;
