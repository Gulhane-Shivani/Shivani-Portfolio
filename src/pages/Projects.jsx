import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import FadeIn from "../components/FadeIn";

export default function Projects({ darkMode }) {
  return (
    <section id="projects" className={`py-16 transition-colors duration-300 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-[#f4e6f6]'}`}>
      <div className="container mx-auto px-6 text-center">
        <FadeIn direction="up">
          <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Academic <span className="text-purple-500">Projects</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.15} direction="up" className="h-full">
              <ProjectCard {...project} darkMode={darkMode} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
