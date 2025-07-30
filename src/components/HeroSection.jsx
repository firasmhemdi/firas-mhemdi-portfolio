import { useEffect, useState } from "react";
import { ArrowDown, Linkedin } from "lucide-react";

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
    <span className="text-blue-600 font-semibold bg-blue-100 px-4 py-2 rounded-full shadow">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      <div className="container max-w-3xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="block text-gray-800 opacity-0 animate-fade-in">
              Hello, I'm
            </span>
            <span className="block text-blue-700 opacity-0 animate-fade-in-delay-1">
              Firas Mhemdi
            </span>
          </h1>

          <div className="flex justify-center opacity-0 animate-fade-in-delay-2">
            <TypedText
              texts={[
                "Full-Stack Developer",
                "IT Student",
                "Passionate about Web Development",
              ]}
            />
          </div>

          <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Computer science student specializing in web and multimedia development.
            <br />
            Seeking an apprenticeship to deepen my technical skills and contribute to innovative projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="px-6 py-2 rounded bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition transform hover:-translate-y-1 hover:scale-105 duration-200"
            >
              View my projects
            </a>
            <a
              href="https://www.linkedin.com/in/firas-mhemdi-730260255/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded border border-blue-700 text-blue-700 font-semibold flex items-center gap-2 hover:bg-blue-50 transition transform hover:-translate-y-1 hover:scale-105 duration-200"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a
              href="/CV Firas Mhemdi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded border border-gray-400 text-gray-700 font-semibold hover:bg-gray-100 transition transform hover:-translate-y-1 hover:scale-105 duration-200"
            >
              Download my CV
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-500 mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-blue-700" />
      </div>
    </section>
  );
};