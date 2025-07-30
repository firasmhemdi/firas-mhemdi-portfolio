import { cn } from "@/lib/utils";
import { Menu, X, Linkedin, Github, Mail, FileText } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const offsets = navItems.map((item) => {
        const el = document.querySelector(item.href);
        return el ? el.offsetTop : 0;
      });
      const scroll = window.scrollY + 80;
      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scroll >= offsets[i]) {
          setActive(navItems[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-2 sm:py-3 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" 
          : "py-3 sm:py-5 bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-bold text-blue-700 group"
          href="#hero"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 text-white text-sm sm:text-base rounded-md group-hover:bg-blue-700 transition-all duration-200 group-hover:scale-105">
            F
          </span>
          <span className="hidden sm:block">Firas Portfolio</span>
          <span className="block sm:hidden text-base">Firas</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition-all duration-200 px-4 py-2 rounded-lg text-sm font-medium ${
                active === item.href
                  ? "text-blue-700 font-semibold bg-blue-100/80 shadow-sm"
                  : "text-gray-700 hover:text-blue-700 hover:bg-blue-50/80"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Social Links */}
        <div className="hidden lg:flex items-center gap-2 ml-4 pl-4 border-l border-gray-200">
          <a
            href="https://github.com/firasmhemdi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 rounded-lg hover:bg-gray-100 hover:text-gray-800 transition-all duration-200 group relative"
            title="GitHub Profile"
          >
            <Github size={18} />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 hidden group-hover:block px-2 py-1 text-xs text-white bg-gray-800 rounded whitespace-nowrap z-10">
              GitHub
            </span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/firas-mhemdi-730260255/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-blue-600 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 group relative"
            title="LinkedIn Profile"
          >
            <Linkedin size={18} />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 hidden group-hover:block px-2 py-1 text-xs text-white bg-gray-800 rounded whitespace-nowrap z-10">
              LinkedIn
            </span>
          </a>
          
          <a
            href="mailto:firasmhemdi666@gmail.com"
            className="p-2 text-gray-600 rounded-lg hover:bg-gray-100 hover:text-gray-800 transition-all duration-200 group relative"
            title="Send Email"
          >
            <Mail size={18} />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 hidden group-hover:block px-2 py-1 text-xs text-white bg-gray-800 rounded whitespace-nowrap z-10">
              Email
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200 z-50 relative"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-6">
            <Menu 
              size={24} 
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
              }`} 
            />
            <X 
              size={24} 
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
              }`} 
            />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 lg:hidden transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col justify-center items-center min-h-screen px-6">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-4 w-full max-w-sm">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-center py-4 px-6 rounded-xl text-lg font-medium transition-all duration-200 transform ${
                    active === item.href
                      ? "text-blue-700 font-semibold bg-blue-100 scale-105"
                      : "text-gray-700 hover:text-blue-700 hover:bg-blue-50 hover:scale-105"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: isMenuOpen ? 'slideInFromRight 0.5s ease-out forwards' : 'none'
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* Mobile Social Links */}
            <div className="flex justify-center gap-4 mt-12 pt-8 border-t border-gray-200 w-full max-w-sm">
              <a
                href="https://github.com/firasmhemdi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-full transition-all duration-200 hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/firas-mhemdi-730260255/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 text-blue-600 hover:bg-blue-50 hover:text-blue-700 rounded-full transition-all duration-200 hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:firasmhemdi666@gmail.com"
                className="p-4 text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-full transition-all duration-200 hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};