import KLEats from "../../assets/kleats.png";
import KarmaSync from "../../assets/karmasync.png";
import SafeWebVerify from "../../assets/safewebverify.jpg";
import FaceAttend from "../../assets/FaceAttend.png";
import SwatVsTheUndead from "../../assets/swatvstheundead.png";
import FruitBlast from "../../assets/FruitBlast.png";


const Menu = [
	{
		id: 1,
		image: KLEats,
		title: "KL Eats",
		category: ["Next.js, Node.js, MySQL, TailwindCSS, Shadcn UI, Cashfree, Redis"],
		url: "https://kleats.in/",
		repositoryUrl: "https://github.com/KLEats",
		description: "KLEats is a campus food pre-ordering platform that helps students order meals in advance and enables canteens to manage orders, payments, and settlements efficiently.",
		type: "Apps"
	},
	{
		id: 2,
		image: FaceAttend,
		title: "FaceAttend",
		category: [
			"React Native (Expo)",
			"React + Vite (Web ERP)",
			"Node.js",
			"Express",
			"TypeScript",
			"MongoDB",
			"Python",
			"Flask",
			"FaceNet",
			"Socket.io",
			"JWT"
		],
		url: "https://faceattendai.netlify.app/",
		repositoryUrl: "https://github.com/bsurajpatra/FaceAttend",
		description: "FaceAttend is a kiosk-grade, face recognition attendance platform for educational institutions featuring a premium Web ERP and a real-time mobile attendance app. It uses FaceNet-based biometric recognition, secure Android kiosk mode, and WebSocket-powered Web–Mobile sync to prevent proxy attendance, enable remote face capture, and provide detailed analytics with professional PDF/CSV reports.",
		type: "Apps"
	},
	{
		id: 3,
		image: SafeWebVerify,
		title: "SafeWebVerify",
		category: ["React, Node.js, Express, MongoDB, Python, Flask, scikit-learn, JWT"],
		url: null,
		repositoryUrl: "https://github.com/bsurajpatra/SafeWebVerify",
		description: "SafeWebVerify is a full-stack phishing detection platform that uses machine learning to analyze URLs and classify them as legitimate or phishing in real time.",
		type: "Apps"
	},
	{
		id: 4,
		image: KarmaSync,
		title: "KarmaSync",
		category: ["React, Node.js, Express, MongoDB, JWT, SMTP, EmailJS"],
		url: "https://karmasync.vercel.app/",
		repositoryUrl: "https://github.com/bsurajpatra/KarmaSync_info",
		description: "Karma Sync is a lightweight Agile project management tool that helps individuals and teams plan, track, and collaborate on projects using Kanban boards, sprints, user stories, and daily to-do tracking — all from a single dashboard.",
		type: "Apps"
	},
	{
		id: 5,
		image: SwatVsTheUndead,
		title: "SWAT vs the Undead",
		category: ["Unity Engine, C#, Unity Asset Store, Mixamo"],
		url: "https://bsurajpatra.itch.io/swat-vs-the-undead",
		repositoryUrl: "https://github.com/bsurajpatra/swat-vs-the-undead",
		description: "SWAT vs the Undead is a single-player FPS arena survival game where players fight waves of zombies, manage health and ammunition, and survive increasingly difficult encounters. The game is designed to be played on laptops and desktop PCs only.",
		type: "Games"
	},
	{
		id: 6,
		image: FruitBlast,
		title: "Fruit Blast",
		category: ["Unity Engine, C#, Unity Asset Store"],
		url: "https://bsurajpatra.itch.io/fruit-blast",
		repositoryUrl: null,
		description: "Fruit Blast is a fast-paced Unity arcade game where players blast flying fruits, avoid bombs, and hit a target score before time runs out. Playable on both mobile devices and PCs.",
		type: "Games"
	}
];


export default Menu;


