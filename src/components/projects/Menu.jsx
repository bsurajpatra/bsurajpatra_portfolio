import StuBuddies from "../../assets/StuBuddies.png";
import KLEats from "../../assets/kleats.png";
import GrubGo from "../../assets/grubgo.png";
// import Work4 from "../../assets/blog-1.svg";

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
		title: "GrubGo - \nComing Soon",
		category: ["Full Stack"],
		url: null,
		repositoryUrl: null,
		description: "A Community-Driven Food Delivery Platform for Local Restaurants"
	},
	{
		id: 4,
		image: null,
		title: "Personal Portfolio",
		category: ["MERN"],
		url: null,
		repositoryUrl: "https://github.com/bsurajpatra/bsurajpatra_portfolio",
		description: "A personal portfolio showcasing my skills, projects, and experience."
	}
];

export default Menu;