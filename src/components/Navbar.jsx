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
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? "py-3 bg-white/90 backdrop-blur-md shadow-sm" : "py-5 bg-white/90"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo with F icon */}
        <a
          className="flex items-center gap-2 text-xl font-bold text-blue-700 group"
          href="#hero"
        >
          <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-md group-hover:bg-blue-700 transition">
            F
          </span>
          <span>Firas Portfolio</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition-all duration-200 px-3 py-1 rounded-md ${
                active === item.href
                  ? "text-blue-700 font-semibold bg-blue-100/80"
                  : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
              }`}
            >
              {item.name}
            </a>
          ))}
          
          {/* Social links with tooltips */}
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-200">
           
            
            <a
              href="https://github.com/firasmhemdi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 rounded hover:bg-gray-100 transition group relative"
              data-tooltip="GitHub"
            >
              <Github size={18} />
              <span className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 text-xs text-white bg-gray-800 rounded whitespace-nowrap">
                GitHub Profile
              </span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/firas-mhemdi-730260255/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-blue-700 rounded hover:bg-blue-50 transition group relative"
              data-tooltip="LinkedIn"
            >
              <Linkedin size={18} />
              <span className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 text-xs text-white bg-gray-800 rounded whitespace-nowrap">
                LinkedIn Profile
              </span>
            </a>
            
            <a
              href="mailto:firasmhemdi666@gmail.com"
              className="p-2 text-gray-700 rounded hover:bg-gray-100 transition group relative"
              data-tooltip="Email"
            >
              <Mail size={18} />
              <span className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 text-xs text-white bg-gray-800 rounded whitespace-nowrap">
                Contact Me
              </span>
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-blue-700 z-50 hover:bg-blue-50 rounded transition"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile nav */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-blue-700 p-2 hover:bg-blue-50 rounded"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
          
          <div className="flex flex-col space-y-6 text-xl w-full px-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-center py-3 px-6 rounded-lg transition-colors ${
                  active === item.href
                    ? "text-blue-700 font-semibold bg-blue-100"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            <div className="flex justify-center gap-4 mt-8">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-700 hover:bg-gray-100 rounded-full transition"
              >
                <FileText size={24} />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-700 hover:bg-gray-100 rounded-full transition"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/firas-mhemdi-730260255/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-blue-700 hover:bg-blue-50 rounded-full transition"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:your@email.com"
                className="p-3 text-gray-700 hover:bg-gray-100 rounded-full transition"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};