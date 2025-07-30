import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
          About <span className="text-blue-700">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left block */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex flex-col items-center md:items-start gap-4">
              <img
                src="/Firas Mhemdi.png"
                alt="Firas Mhemdi"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow-lg hover:scale-105 transition"
              />
              <h3 className="text-2xl font-semibold text-center md:text-left">
                Passionate Full-Stack Developer
              </h3>
            </div>
            <p className="text-gray-600">
              As a computer science student with a strong passion for web development, I am seeking an internship to deepen my technical skills and contribute to innovative projects.
            </p>
            <p className="text-gray-600">
              Curious and creative, I invest myself in every project to deliver the best possible user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Contact Me
              </a>
              <a
                href="/CV_Firas.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-blue-700 text-blue-700 font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                Download My CV
              </a>
            </div>
          </div>

          {/* Right block */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <Code className="h-6 w-6 text-blue-700" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-gray-600">
                    Creating responsive websites and web applications using modern frameworks like Symfony and React.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <User className="h-6 w-6 text-blue-700" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-gray-600">
                    Designing intuitive interfaces and smooth user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <Briefcase className="h-6 w-6 text-blue-700" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-gray-600">
                    Leading projects from idea to delivery using agile methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};