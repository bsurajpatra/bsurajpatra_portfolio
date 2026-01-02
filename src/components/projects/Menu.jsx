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
		category: ["Next.js, Node.js, MySQL, TailwindCSS, Shadcn UI, Cashfree, Redis"],
		url: "https://kleats.in/",
		repositoryUrl: "https://github.com/KLEats",
		description: "KLEats is a campus food pre-ordering platform that helps students order meals in advance and enables canteens to manage orders, payments, and settlements efficiently."

	},
	{
		id: 2,
		image: FaceAttend,
		title: "FaceAttend",
		category: ["React Native (Expo), Node.js, Express, MongoDB, Python, Flask, FaceNet, JWT"],
		url: "https://faceattendai.netlify.app/",
		repositoryUrl: "https://github.com/bsurajpatra/FaceAttend",
		description: "FaceAttend is a face recognition–based attendance system for educational institutions that automatically marks attendance in real time, prevents proxy attendance through secure kiosk mode, and provides detailed analytics and reports."
	},
	{
		id: 3,
		image: KLEatsFinance,
		title: "KL Eats Finance",
		category: ["React + Vite, Node.js, Express, MySQL"],
		url: "https://finance.kleats.in/",
		repositoryUrl: "https://github.com/KLEats/finance_kleats",
		description: "A finance management system for KL Eats."
	},
	{
		id: 4,
		image: SafeWebVerify,
		title: "SafeWebVerify",
		category: ["React, Node.js, Express, MongoDB, Python, Flask, scikit-learn, JWT"],
		url: null,
		repositoryUrl: "https://github.com/bsurajpatra/SafeWebVerify",
		description: "SafeWebVerify is a full-stack phishing detection platform that uses machine learning to analyze URLs and classify them as legitimate or phishing in real time.",
	},
	{
		id: 5,
		image: KarmaSync,
		title: "KarmaSync",
		category: ["React, Node.js, Express, MongoDB, JWT, SMTP, EmailJS"],
		url: "https://karmasync.vercel.app/",
		repositoryUrl: "https://github.com/bsurajpatra/KarmaSync_info",
		description: "Karma Sync is a lightweight Agile project management tool that helps individuals and teams plan, track, and collaborate on projects using Kanban boards, sprints, user stories, and daily to-do tracking — all from a single dashboard."
	},
	{
		id: 6,
		image: SwatVsTheUndead,
		title: "SWAT vs the Undead",
		category: ["Unity Engine, C#, Unity Asset Store, Mixamo"],
		url: "https://bsurajpatra.itch.io/swat-vs-the-undead",
		repositoryUrl: "https://github.com/bsurajpatra/swat-vs-the-undead",
		description: "SWAT vs the Undead is a single-player FPS arena survival game where players fight waves of zombies, manage health and ammunition, and survive increasingly difficult encounters."
	},

];


export default Menu;


