export default function CertificationCard({ title, issuer, score, date, image, description }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
            <div className="relative">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {score ? `Score: ${score}` : "Certified"}
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800 leading-tight">{title}</h3>
                </div>
                <p className="text-blue-600 font-semibold text-sm mb-3">{issuer}</p>
                <p className="text-gray-600 mb-4 text-sm flex-grow line-clamp-3">{description}</p>

                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                    <span>{date}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">Verify Certificate</span>
                </div>
            </div>
        </div>
    );
}
