export default function SkillCard({ category, items, darkMode }) {
  return (
    <div className={`p-6 rounded-xl border transition-all duration-300 ${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-gray-50 border-transparent hover:shadow-md'}`}>
      <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
        {category}
      </h3>
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <li key={index} className="flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:scale-105 bg-white/5 dark:bg-black/20 hover:bg-white/10 dark:hover:bg-black/40">
            <img
              src={item.icon}
              alt={item.name}
              className="w-10 h-10 object-contain drop-shadow-sm"
              loading="lazy"
            />
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} text-center`}>
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
