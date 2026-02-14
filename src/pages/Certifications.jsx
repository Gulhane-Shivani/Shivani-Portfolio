import { certifications } from "../data/certifications";
import CertificationCard from "../components/CertificationCard";

export default function Certifications({ darkMode }) {
    return (
        <section id="certifications" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} min-h-screen`}>
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">
                    My <span className="text-blue-500">Certifications</span>
                </h2>
                <p className={`mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Continuous learning is the key to growth. Here are some of the professional certifications I have earned.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert) => (
                        <CertificationCard key={cert.id} {...cert} darkMode={darkMode} />
                    ))}
                </div>
            </div>
        </section>
    );
}
