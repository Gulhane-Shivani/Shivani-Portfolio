export default function ProjectCard({ title, image, description, link, technologies }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm flex-grow">{description}</p>

        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies && technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-md">
              {tech}
            </span>
          ))}
        </div>

        <a
          href={link || ""}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-center w-full py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
