import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Github, Eye, Tag, Award } from "lucide-react";

const projects = [
	
	{
		id: 1,
		title: "Think Trend - Medical Platform",
		description:
			"Comprehensive medical platform featuring appointment scheduling, online consultations, pharmacy management, and AI-powered diagnostic predictions.",
		image: "/projects/Medical_app.png",
		tags: ["React", "Node.js", "Express.js", "MySQL", "Python", "Tailwind CSS"],
	
		githubUrl: "https://github.com/firasmhemdi/Medical_Espace_App",
		features: [
			"Smart appointment scheduling system",
			"Secure telemedicine consultations",
			"Network pharmacy management",
			"Interactive medical magazine",
			"AI-powered diagnostic prediction module"
		],
		category: "Healthcare & AI",
		featured: true,
	},
	{
		id: 2,
		title: "Event Management",
		description:
			"I developed a comprehensive platform that empowers organizers to create, edit, and delete events, manage registrations, and send notifications. Participants can search for events by category, date, or location, register, and receive real-time updates.",
		image: "/projects/gest-event.png",
		tags: ["React.js", "Vite", "Tailwind CSS", "Spring Boot", "MySQL"],
		
		githubUrl: "https://github.com/firasmhemdi/GesEvenement-App/tree/main",
		featured: true,
		
	},
	{
		id: 3,
		title: "Nill Digital Market",
		description:
			"Full-stack e-commerce web application developed with Symfony during my internship, featuring product management, shopping cart, and secure checkout.",
		image: "/projects/Nill Digital Market.png",
		tags: ["Symfony 6 (PHP)", "Twig templates + Bootstrap 5", "MySQL", "MailHog"],
		
		githubUrl: "https://github.com/firasmhemdi/Nill-Digital-Market",
	},
	{
		id: 4,
		title: "Full-Stack Book Management System",
		description: "A feature-rich library management application built with the MERN stack (MongoDB, Express, React, Node.js), featuring user authentication, admin controls, and real-time inventory management.",
		keyFeatures: [
			"Secure JWT authentication (User & Admin roles)",
			"CRUD operations for book management",
			"Admin dashboard with analytics",
			"Advanced book search and filtering",
			"Responsive UI with Tailwind CSS"
		],
		image: "/projects/Mern-Book.png",
		tags: ["MongoDB", "Express.js", "React 18", "Node.js", "Tailwind CSS", "JWT", "Redux Toolkit"],
		
		githubUrl: "https://github.com/firasmhemdi/MernBook-App",
	},
	{
		id: 5,
		title: "Book Store Management System",
		description:
			"Full-stack electronic library application with user authentication, admin control panel, inventory management, and book purchasing interface.",
		image: "/projects/book store.png",
		tags: ["Spring Boot", "React", "MySQL", "Bootstrap"],
		
		githubUrl: "https://github.com/firasmhemdi/BookStore",
		
	},
	{
		id: 6,
		title: "Location Car App",
		description:
			"I am developing a mobile application for car rentals that enables users to authenticate their accounts, browse and select cars for rent, process payments, add items to their cart, and search for available vehicles.",
		image: "/projects/LocationCar.png",
		tags: ["Java", "Firebase", "Android Studio"],
		
		githubUrl: "https://github.com/firasmhemdi/LocationCar",
	},
];

const ProjectCard = ({ project }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [imageLoaded, setImageLoaded] = useState(false);

	return (
		<div 
			className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-3 overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
				{!imageLoaded && (
					<div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
						<div className="w-12 h-12 bg-gray-400 rounded-lg opacity-50"></div>
					</div>
				)}
				<img
					src={project.image}
					alt={project.title}
					className={`w-full h-full object-cover transition-all duration-700 ${
						isHovered ? 'scale-110' : 'scale-100'
					} ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
					onLoad={() => setImageLoaded(true)}
					onError={() => setImageLoaded(true)}
				/>
				
				{project.featured && (
					<div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
						<Award className="w-3 h-3" />
						Featured
					</div>
				)}

				<div className={`absolute inset-0 bg-black/60 transition-all duration-300 flex items-center justify-center ${
					isHovered ? 'opacity-100' : 'opacity-0'
				}`}>
					<div className="flex space-x-4">
						<a
							href={project.demoUrl}
							className="p-3 bg-white rounded-full shadow-lg hover:bg-blue-50 hover:scale-110 transition-all duration-200 group/btn"
							title="View Live Demo"
						>
							<Eye className="w-5 h-5 text-blue-600 group-hover/btn:text-blue-700" />
						</a>
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 hover:scale-110 transition-all duration-200 group/btn"
							title="View Source Code"
						>
							<Github className="w-5 h-5 text-gray-700 group-hover/btn:text-gray-900" />
						</a>
					</div>
				</div>
			</div>

			<div className="p-6 flex-1 flex flex-col">
				{project.category && (
					<div className="mb-3">
						<span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
							<Tag className="w-3 h-3" />
							{project.category}
						</span>
					</div>
				)}

				<h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white line-clamp-2 min-h-[3.5rem]">
					{project.title}
				</h3>

				<p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3 min-h-[4.5rem] flex-1">
					{project.description}
				</p>

				<div className="flex flex-wrap gap-2 mb-4 min-h-[2.5rem]">
					{project.tags.map((tag) => (
						<span
							key={tag}
							className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
						>
							{tag}
						</span>
					))}
				</div>

				<div className="flex gap-3 mt-auto">
				{/* Bouton Live Demo uniquement si demoUrl existe */}
				{project.demoUrl && (
					<a
						href={project.demoUrl}
						className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
					>
						<Eye className="w-4 h-4 mr-2" />
						Live Demo
					</a>
				)}
				<a
					href={project.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="flex-1 inline-flex items-center justify-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200 transform hover:scale-105"
				>
					<Github className="w-4 h-4 mr-2" />
					Code
				</a>
			</div>
			</div>
		</div>
	);
};

export const ProjectsSection = () => {
	return (
		<section
			id="projects"
			className="py-24 px-4 relative bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:bg-gray-900/50"
		>
			<div className="container mx-auto max-w-7xl relative z-10">
				<div className="text-center mb-16">
					<span className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-6">
						PORTFOLIO SHOWCASE
					</span>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 dark:from-gray-100 dark:to-blue-400 bg-clip-text text-transparent">
						My Technical Projects
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Each project represents a unique challenge solved with clean code,
						modern architecture, and attention to detail.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>

				<div className="text-center">
					<a
						href="https://github.com/firasmhemdi"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
					>
						<Github className="w-5 h-5 mr-2" />
						Explore All Projects
						<ArrowRight className="ml-2 w-5 h-5" />
					</a>
				</div>
			</div>
		</section>
	);
};