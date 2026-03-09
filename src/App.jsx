import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Lenis from "lenis";

export default function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode as per reference
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Make lenis available globally for easy scrolling from Navbar
    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  // Reset scroll on route change
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

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
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <div className="flex flex-col">
              <Home darkMode={darkMode} />
              <About darkMode={darkMode} />
              <Projects darkMode={darkMode} />
              <Certifications darkMode={darkMode} />
              <Skills darkMode={darkMode} />
              <Contact darkMode={darkMode} />
            </div>
          } />
          <Route path="/resume" element={<Resume darkMode={darkMode} />} />
        </Routes>
      </main>
    </div>
  );
}

