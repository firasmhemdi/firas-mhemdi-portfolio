import { ArrowUp, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:bg-gray-900/70 border-t border-border pt-10 pb-6 px-4">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
          &copy; {new Date().getFullYear()} Firas Mhemdi. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/firas-mhemdi-730260255"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-700 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/firasmhemdi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-700 transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="#hero"
            className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800 text-blue-700 transition animate-bounce"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
