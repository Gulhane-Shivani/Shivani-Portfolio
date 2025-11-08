import { skills } from "../data/skills";
import SkillCard from "../components/SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
