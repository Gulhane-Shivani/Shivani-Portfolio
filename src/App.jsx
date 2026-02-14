import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FloatingDock from "./components/FloatingDock";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode as per reference

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar darkMode={darkMode} />
      <main className="flex-grow pb-24"> {/* Added padding bottom for floating dock */}
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/certifications" element={<Certifications darkMode={darkMode} />} />
          <Route path="/skills" element={<Skills darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          <Route path="/resume" element={<Resume darkMode={darkMode} />} />
        </Routes>
      </main>

      <FloatingDock darkMode={darkMode} toggleTheme={toggleTheme} />
    </div>
  );
}
