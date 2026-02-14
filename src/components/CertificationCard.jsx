export default function CertificationCard({ title, issuer, score, date, image, description, darkMode }) {
    return (
        <div className={`rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-transparent'}`}>
            <div className="relative">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {score}
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className={`text-xl font-bold mb-2 leading-tight ${darkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
                <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-semibold text-sm mb-3`}>{issuer}</p>
                <p className={`mb-4 text-sm flex-grow line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>

                <div className={`mt-auto pt-4 border-t flex justify-between items-center text-xs ${darkMode ? 'border-gray-700 text-gray-500' : 'border-gray-100 text-gray-500'}`}>
                    <span>{date}</span>
                    <span className={`${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'} px-2 py-1 rounded font-medium`}>Verify Certificate</span>
                </div>
            </div>
        </div>
    );
}
