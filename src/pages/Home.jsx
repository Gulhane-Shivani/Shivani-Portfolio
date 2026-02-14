import { useEffect, useState } from "react";
import "../styles/global.css"; // Make sure this is included

export default function Home({ darkMode }) {
  const titles = [
    "Web Developer",
    "Frontend Designer",
    "UI/UX Enthusiast",
    "React Developer",
    "Creative Coder",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // index of the current title
  const [subIndex, setSubIndex] = useState(0); // letter index within the title
  const [deleting, setDeleting] = useState(false);

  // Typing effect logic
  useEffect(() => {
    if (index >= titles.length) return;

    const currentTitle = titles[index];
    const typingSpeed = deleting ? 60 : 120; // typing speed
    const pauseTime = 1000; // pause before deleting

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < currentTitle.length) {
        setSubIndex(subIndex + 1);
      } else if (deleting && subIndex > 0) {
        setSubIndex(subIndex - 1);
      } else if (!deleting && subIndex === currentTitle.length) {
        setTimeout(() => setDeleting(true), pauseTime);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((index + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, titles]);

  useEffect(() => {
    setText(titles[index].substring(0, subIndex));
  }, [subIndex, index, titles]);

  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col md:flex-row justify-center items-center px-6 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-animate'}`}
    >
      {/* Profile Image Section */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="relative group">
          {/* Glowing Background */}
          <div className={`absolute inset-0 blur-[60px] rounded-full opacity-50 w-80 h-80 mx-auto animate-pulse ${darkMode ? 'bg-blue-900' : 'bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400'}`}></div>

          {/* Profile Image Container with Gradient Border */}
          <div className="relative w-72 h-72 rounded-full p-1.5 bg-gradient-to-tr from-purple-500 to-blue-500 hover:scale-105 transition-transform duration-500 ease-out">
            <img
              src="/assets/Profile_photo.jpg"
              alt="Shivani"
              className={`w-full h-full rounded-full border-4 object-cover shadow-inner ${darkMode ? 'border-gray-800 bg-gray-800' : 'border-white bg-gray-800'}`}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">

        {/* Main Heading */}
        <h2 className={`text-4xl sm:text-5xl font-extrabold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Hi, I'm <span className="text-purple-500">Shivani</span>
        </h2>

        {/* Typewriter Subtitle */}
        <p className={`text-xl sm:text-2xl font-medium transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          A passionate{" "}
          <span className="text-purple-400 font-bold">
            {text}
            <span className={`border-r-2 ${darkMode ? 'border-purple-400' : 'border-purple-700'} ml-1 animate-cursor`}>|</span>
          </span>
        </p>

        {/* Profile Description */}
        <p className={`max-w-lg leading-relaxed text-lg transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          I'm a creative student combining design and technology. I craft digital experiences that are functional and visually delightful, constantly exploring modern tools to sharpen my skills.
        </p>

        {/* Skills Section */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className={`text-lg font-semibold transition-colors duration-300 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Tech Stack:</h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {["React", "Java", "Python"].map((skill) => (
              <span
                key={skill}
                className={`px-4 py-2 font-semibold rounded-full shadow-md border transition-colors ${darkMode ? 'bg-gray-800 text-purple-400 border-gray-700 hover:bg-gray-700' : 'bg-white text-purple-700 border-purple-100 hover:bg-purple-50'}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
