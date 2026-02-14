import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects({ darkMode }) {
  return (
    <section id="projects" className={`py-16 transition-colors duration-300 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Academic <span className="text-purple-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
}
