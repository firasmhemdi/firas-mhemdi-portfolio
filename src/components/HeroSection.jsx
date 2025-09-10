import { useEffect, useState } from "react";
import { ArrowDown, Linkedin, Download, Eye } from "lucide-react";

// Typing effect component
const TypedText = ({ texts, speed = 80, pause = 1200 }) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      );
      setDisplayed(
        texts[index].substring(0, subIndex)
      );
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts, speed, pause]);

  return (
    <span className="inline-flex items-center text-blue-600 font-semibold bg-blue-100 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-md text-sm sm:text-base">
      {displayed}
      <span className="animate-pulse ml-1 text-blue-500">|</span>
    </span>
  );
};

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-16 w-32 h-32 sm:w-48 sm:h-48 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-16 w-32 h-32 sm:w-48 sm:h-48 bg-blue-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-5xl mx-auto text-center z-10 pt-16 sm:pt-20">
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Main heading */}
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight">
              <span 
                className={`block text-gray-800 dark:text-gray-100 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Hello, I'm
              </span>
              <span 
                className={`block text-blue-700 dark:text-blue-400 mt-2 transition-all duration-1000 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Firas Mhemdi
              </span>
            </h1>
          </div>

          {/* Typed text */}
          <div 
            className={`flex justify-center transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <TypedText
              texts={[
                "Full-Stack Developer",
                "IT Student",
                "Web Development Enthusiast",
                "Problem Solver"
              ]}
              speed={100}
              pause={1500}
            />
          </div>

          {/* Description */}
          <p 
            className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            IT student specializing in web and multimedia development.
            <br className="hidden sm:block" />
            <span className="block sm:inline"> Seeking an apprenticeship to deepen my technical skills and contribute to innovative projects.</span>
          </p>

          {/* Action buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-blue-700 text-white font-semibold shadow-lg hover:bg-blue-800 transition-all duration-200 transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <Eye size={18} className="group-hover:scale-110 transition-transform" />
              View My Projects
            </a>

            <a
              href="https://www.linkedin.com/in/firas-mhemdi-730260255/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border-2 border-blue-700 text-blue-700 font-semibold flex items-center justify-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 transform hover:-translate-y-1 hover:scale-105 group"
            >
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              LinkedIn Profile
            </a>

            <a
              href="/CV Firas Mhemdii.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border-2 border-gray-400 text-gray-700 dark:text-gray-300 dark:border-gray-500 font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 group"
            >
              <Download size={18} className="group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Download</span> CV
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce transition-all duration-1000 delay-1300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-blue-700 dark:border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-700 dark:bg-blue-400 rounded-full animate-pulse mt-2"></div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideInFromBottom {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};