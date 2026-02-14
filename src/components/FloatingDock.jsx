import { useNavigate, useLocation } from "react-router-dom";
import { Home, User, Briefcase, GraduationCap, Code2, Mail, Award, Moon, Sun } from "lucide-react";

export default function FloatingDock({ darkMode, toggleTheme }) {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { icon: <Home size={20} />, label: "Home", path: "/" },
        { icon: <User size={20} />, label: "About", path: "/about" },
        { icon: <Briefcase size={20} />, label: "Projects", path: "/projects" },
        { icon: <Award size={20} />, label: "Certifications", path: "/certifications" },
        { icon: <Code2 size={20} />, label: "Skills", path: "/skills" },
        { icon: <Mail size={20} />, label: "Contact", path: "/contact" },
    ];

    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <div className={`flex items-center gap-2 md:gap-4 px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-lg border transition-all duration-300 ${darkMode ? 'bg-gray-900/80 border-gray-700/50' : 'bg-white/80 border-gray-200/50'}`}>

                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <button
                            key={item.label}
                            onClick={() => navigate(item.path)}
                            className={`relative group p-3 rounded-xl transition-all duration-300 hover:scale-110 ${isActive
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                    : `${darkMode ? 'text-gray-400 hover:bg-gray-800 hover:text-white' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`
                                }`}
                            title={item.label}
                        >
                            {item.icon}

                            {/* Desktop Tooltip */}
                            <span className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-900 text-white'}`}>
                                {item.label}
                            </span>
                        </button>
                    );
                })}

                {/* Separator */}
                <div className={`w-px h-8 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

            </div>
        </div>
    );
}
