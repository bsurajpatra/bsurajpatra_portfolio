import StuBuddies from "../../assets/StuBuddies.png";
import KLEats from "../../assets/kleats.png";
import GrubGo from "../../assets/grubgo.png";
import Portfolio from "../../assets/portfolio.png";

const Menu = [
	{
		id: 1,
		image: StuBuddies,
		title: "StuBuddies",
		category: ["MERN"],
		url: "https://stubuddies-client.vercel.app/",
		repositoryUrl: "https://github.com/bsurajpatra/StuBuddies",
		description: "A collaborative platform for students to connect and share resources."
	},
	{
		id: 2,
		image: KLEats,
		title: "KL Eats",
		category: ["EJS, Node.js"],
		url: "https://kleats.in/",
		repositoryUrl: null,
		description: "KL Eats makes campus dining easy with meal pre-ordering."
	},
	{
		id: 3,
		image: GrubGo,
		title: <h1 style={{ color: "white" }}>GrubGo <br /> <h6>Coming Soon</h6></h1>,
		category: ["Full Stack"],
		url: null,
		repositoryUrl: null,
		description: "A Community-Driven Food Delivery Platform for Local Restaurants"
	},
	{
		id: 4,
		image: Portfolio,
		title: "Personal Portfolio",
		category: ["MERN"],
		url: null,
		repositoryUrl: "https://github.com/bsurajpatra/bsurajpatra_portfolio",
		description: "A personal portfolio showcasing my skills, projects, and experience."
	}
];

export default Menu;