import { CheckCircle } from "lucide-react";

export default function CertificationCard({ title, issuer, score, date, image, description, darkMode }) {
    return (
        <div className={`rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-transparent'}`}>
            <div className="relative">
                <img src={image} alt={title} className="w-full h-40 object-cover" />
                {/* {score && (*/}
                
            </div>
            <div className="p-5 flex flex-col flex-grow text-left">
                <h3 className={`text-lg font-bold mb-1 leading-tight ${darkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
                <p className={`${darkMode ? 'text-purple-400' : 'text-purple-600'} font-semibold text-xs mb-2`}>{issuer}</p>
                <p className={`mb-3 text-sm flex-grow line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>

                <div className={`mt-auto pt-4 border-t flex justify-between items-center text-xs ${darkMode ? 'border-gray-700 text-gray-500' : 'border-gray-100 text-gray-500'}`}>
                    <span>{date}</span>
                    <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold transition-colors ${darkMode
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                        }`}>
                        <CheckCircle size={12} />
                        Verified
                    </span>
                </div>
            </div>
        </div>
    );
}
