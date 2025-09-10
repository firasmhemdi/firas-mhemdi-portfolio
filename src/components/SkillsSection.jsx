import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
	{ name: "Java", category: "backend" },
	{ name: "Python", category: "backend" },
	{ name: "JavaScript", category: "frontend" },
	{ name: "React", category: "frontend" },
	{ name: "Angular", category: "frontend" },
	{ name: "Node.js", category: "backend" },
	{ name: "Express.js", category: "backend" },
	{ name: "Spring Boot", category: "backend" },
	{ name: "Symfony", category: "backend" },
	{ name: "Flutter", category: "mobile" },
	{ name: "Dart", category: "mobile" },
	{ name: "MySQL", category: "database" },
	{ name: "MongoDB", category: "database" },
	{ name: "PL/SQL", category: "database" },
	{ name: "Tailwind CSS", category: "frontend" },
	{ name: "Bootstrap", category: "frontend" },
	{ name: "Git", category: "tools" },
	{ name: "Figma", category: "tools" },
	{ name: "VS Code", category: "tools" },
	{ name: "Postman", category: "tools" },
	{ name: "Android Studio", category: "tools" },
];

const categories = [
	{ key: "all", label: "All" },
	{ key: "frontend", label: "Frontend" },
	{ key: "backend", label: "Backend" },
	{ key: "database", label: "Database" },
	{ key: "mobile", label: "Mobile" },
	{ key: "tools", label: "Tools" },
];

export const SkillsSection = () => {
	const [activeCategory, setActiveCategory] = useState("all");

	const filteredSkills = skills.filter(
		(skill) => activeCategory === "all" || skill.category === activeCategory
	);

	return (
		<section id="skills" className="py-24 px-4 relative bg-gradient-to-br from-white via-blue-50 to-blue-100">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
					My <span className="text-primary">Skills</span>
				</h2>

				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{categories.map((category) => (
						<button
							key={category.key}
							onClick={() => setActiveCategory(category.key)}
							className={cn(
								"px-5 py-2 rounded-full transition-all duration-300 capitalize font-medium",
								activeCategory === category.key
									? "bg-primary text-primary-foreground active-filter"
									: "bg-secondary/70 text-foreground hover:bg-secondary"
							)}
						>
							{category.label}
						</button>
					))}
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredSkills.map((skill, key) => (
						<div
							key={key}
							className="bg-card p-6 rounded-lg shadow-xs card-hover animate-fade-in-up"
							style={{
								animationDelay: `${key * 0.07 + 0.1}s`,
								animationFillMode: "both",
							}}
						>
							<h3 className="font-semibold text-lg text-center">{skill.name}</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};