export default function ProjectCard({ title, image, description, link, technologies, darkMode }) {
  return (
    <div className={`rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-transparent'}`}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow text-left">
        <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
        <p className={`mb-4 text-sm flex-grow ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>

        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies && technologies.map((tech, index) => (
            <span key={index} className={`px-2 py-1 text-xs font-medium rounded-md ${darkMode ? 'bg-gray-700 text-purple-400' : 'bg-purple-100 text-purple-700'}`}>
              {tech}
            </span>
          ))}
        </div>

        <a
          href={link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block text-center w-full py-2 font-medium rounded-lg transition-colors ${darkMode ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-purple-600 text-white hover:bg-purple-700'}`}
        >
          View Project
        </a>
      </div>
    </div>
  );
}
