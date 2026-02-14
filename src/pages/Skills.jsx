import { skills } from "../data/skills";
import SkillCard from "../components/SkillCard";

export default function Skills({ darkMode }) {
  return (
    <section id="skills" className={`py-20 text-center transition-colors duration-300 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold mb-10 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Technical <span className="text-purple-500">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
}
