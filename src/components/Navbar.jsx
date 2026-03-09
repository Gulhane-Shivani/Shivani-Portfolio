import { Link, useLocation, useNavigate } from "react-router-dom";
import { Github, Menu, X, Linkedin, Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function Navbar({ darkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/#home" },
    { name: "About", path: "/#about" },
    { name: "Projects", path: "/#projects" },
    { name: "Certifications", path: "/#certifications" },
    { name: "Skills", path: "/#skills" },
    { name: "Contact", path: "/#contact" },
    { name: "Resume", path: "/resume" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleScroll = (e, path) => {
    if (path.startsWith("/#")) {
      e.preventDefault();
      const targetId = path.substring(2); // extracts 'home', 'about', etc.

      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          window.lenis?.scrollTo(`#${targetId}`, { offset: -80 });
        }, 100);
      } else {
        window.lenis?.scrollTo(`#${targetId}`, { offset: -80 });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${darkMode
      ? "bg-gray-950/80 border-gray-800 text-white"
      : "bg-white/80 border-gray-200 text-gray-900"
      }`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent hover:scale-105 transition-transform">
          Shivani Gulhane
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 font-medium text-base">
            {navLinks.map((link) => (
              <li key={link.path}>
                {link.isExternal ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-1 transition-colors hover:text-indigo-500 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {link.name}
                  </a>
                ) : link.path.startsWith("/#") ? (
                  <a
                    href={link.path}
                    onClick={(e) => handleScroll(e, link.path)}
                    className={`relative cursor-pointer py-1 transition-colors hover:text-indigo-500 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className={`relative py-1 transition-colors hover:text-indigo-500 ${isActive(link.path) ? "text-indigo-500" : (darkMode ? "text-gray-400" : "text-gray-600")}`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-500 rounded-full"></span>
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className={`w-px h-6 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}></div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${darkMode
                ? "bg-gray-900 text-yellow-400 hover:text-yellow-300 border border-gray-800 hover:border-gray-700"
                : "bg-gray-50 text-gray-600 hover:text-indigo-600 border border-gray-200 hover:border-gray-300"
                }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="https://github.com/Gulhane-Shivani"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${darkMode
                ? "bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700"
                : "bg-gray-50 text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300"
                }`}
              title="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shivani-gulhane-5b2519288/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${darkMode
                ? "bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700"
                : "bg-gray-50 text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300"
                }`}
              title="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Nav Right side buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${darkMode ? "hover:bg-gray-800 text-yellow-400" : "hover:bg-gray-100 text-gray-600"
              }`}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className={`p-2 rounded-lg transition-colors ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
              }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full border-b transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible"
        } ${darkMode ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"
        }`}>
        <ul className="flex flex-col p-6 gap-4 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              {link.isExternal ? (
                <a
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block py-2 transition-colors ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ) : link.path.startsWith("/#") ? (
                <a
                  href={link.path}
                  onClick={(e) => handleScroll(e, link.path)}
                  className={`block py-2 transition-colors cursor-pointer ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.path}
                  className={`block py-2 transition-colors ${isActive(link.path) ? "text-indigo-500" : (darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900")
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
          <li className={`pt-4 border-t ${darkMode ? "border-gray-800" : "border-gray-100"}`}>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Gulhane-Shivani"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 py-2 transition-colors ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                <Github size={20} />
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shivani-gulhane-5b2519288/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 py-2 transition-colors ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
