export default function SkillCard({ category, items }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-purple-700 mb-3">
        {category}
      </h3>
      <ul className="text-gray-700 space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
