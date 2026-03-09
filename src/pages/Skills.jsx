import { skills } from "../data/skills";
import SkillCard from "../components/SkillCard";
import FadeIn from "../components/FadeIn";

export default function Skills({ darkMode }) {
  return (
    <section id="skills" className={`py-20 text-center transition-colors duration-300 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-[#f4e6f6]'}`}>
      <div className="container mx-auto px-6">
        <FadeIn direction="up">
          <h2 className={`text-4xl font-extrabold mb-16 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Technical <span className="bg-gradient-to-r from-pink-400 to-indigo-400 text-transparent bg-clip-text">Skills</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 text-left max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up" className="flex">
              <SkillCard {...skill} darkMode={darkMode} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
