export default function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 text-gray-800'}`}
    >
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Heading */}
        <h2 className={`text-4xl font-extrabold text-center mb-14 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          About <span className="text-purple-500">Me</span>
        </h2>

        {/* Basic Info
        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold text-gray-800">
            Shivani Gulhane
          </h3>
          <p className="text-gray-600 mt-2">
            Enthusiastic Computer Science Student | Pune, India
          </p>
          <p className="text-gray-600 mt-1">
            📧 shivanigulhane2002@gmail.com | 📞 +91 7719030069
          </p>
        </div> */}

        {/* Education Section */}
        <div className="mb-20">
          <h3 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
            Education
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white shadow-md'} p-6 rounded-2xl border transition-all duration-300`}>
              <h4 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                MCA – Master of Computer Applications
              </h4>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Savitribai Phule Pune University (2024 – 2026)
              </p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Status: Pursuing</p>
            </div>

            <div className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white shadow-md'} p-6 rounded-2xl border transition-all duration-300`}>
              <h4 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                BCA – Bachelor of Computer Applications
              </h4>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Sant Gadge Baba Amravati University (2020 – 2023)
              </p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Percentage: 86.69%</p>
            </div>

            <div className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white shadow-md'} p-6 rounded-2xl border transition-all duration-300`}>
              <h4 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                HSC – Maharashtra State Board
              </h4>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>2019 – 2020</p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Percentage: 71.69%</p>
            </div>

            <div className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white shadow-md'} p-6 rounded-2xl border transition-all duration-300`}>
              <h4 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                SSC – Maharashtra State Board
              </h4>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>2017 – 2018</p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Percentage: 90.60%</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
            Experience
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white shadow-md'} p-6 rounded-2xl border transition-all duration-300`}>
              <h4 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                ERP Development Intern
              </h4>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                JSPM JSCOE, Hadapsar, Pune (Sep 2025 – Present)
              </p>
              <ul className={`list-disc list-inside mt-3 space-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>
                  Working on Internship and Placement Management Module.
                </li>
                <li>
                  Developing frontend using React.js and backend using Spring Boot.
                </li>
                <li>
                  Integrating REST APIs and managing PostgreSQL database.
                </li>
                <li>
                  Handling student, company, and placement records.
                </li>
              </ul>
            </div>

            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white shadow-md'} p-6 rounded-2xl border transition-all duration-300`}>
              <h4 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                Full Stack Developer Intern
              </h4>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                MotionCut Pvt. Ltd. (Oct 2024 – Nov 2024)
              </p>
              <ul className={`list-disc list-inside mt-3 space-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>
                  Worked on full stack web development tasks.
                </li>
                <li>
                  Assisted in building responsive and functional web applications.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
