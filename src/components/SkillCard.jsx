export default function SkillCard({ category, items, darkMode }) {
  return (
    <div className={`p-6 rounded-xl border transition-all duration-300 ${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-gray-50 border-transparent hover:shadow-md'}`}>
      <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
        {category}
      </h3>
      <ul className={`space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
