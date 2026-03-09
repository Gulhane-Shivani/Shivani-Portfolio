export default function SkillCard({ category, items, darkMode }) {
  return (
    <div className="flex flex-col h-full bg-transparent">
      <h3 className={`text-xl font-bold mb-5 ${darkMode ? 'text-white' : 'text-gray-900'} pb-2 border-b-2 inline-block self-start ${darkMode ? 'border-indigo-400/30' : 'border-indigo-500/20'}`}>
        {category}
      </h3>
      <ul className="flex flex-wrap gap-4 sm:gap-5 mt-auto">
        {items.map((item, index) => (
          <li key={index} className="flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1.5 group">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl transition-all duration-300 ${darkMode ? 'bg-gray-800/40 group-hover:bg-gray-800/80' : 'bg-gray-100/50 group-hover:bg-white'} group-hover:shadow-md`}>
              <img
                src={item.icon}
                alt={item.name}
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <span className={`text-xs sm:text-sm font-semibold tracking-wide ${darkMode ? 'text-gray-400 group-hover:text-indigo-400' : 'text-gray-600 group-hover:text-indigo-500'} transition-colors duration-300`}>
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
