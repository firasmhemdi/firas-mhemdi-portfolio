import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Java", level: 85, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Angular", level: 75, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "Spring Boot", level: 70, category: "backend" },
  { name: "Symfony", level: 75, category: "backend" },
  { name: "Flutter", level: 70, category: "mobile" },
  { name: "Dart", level: 70, category: "mobile" },
  { name: "MySQL", level: 80, category: "database" },
  { name: "MongoDB", level: 75, category: "database" },
  { name: "PL/SQL", level: 70, category: "database" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Bootstrap", level: 80, category: "frontend" },
  { name: "Git", level: 85, category: "tools" },
  { name: "Figma", level: 75, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Postman", level: 80, category: "tools" },
  { name: "Android Studio", level: 70, category: "tools" },
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
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-grow"
                  style={{
                    width: skill.level + "%",
                    "--bar-width": skill.level + "%",
                  }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};