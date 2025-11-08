export default function SkillCard({ name, level }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow text-center">
      <h4 className="text-lg font-semibold mb-2">{name}</h4>
      <p className="text-gray-600">{level}</p>
    </div>
  );
}
