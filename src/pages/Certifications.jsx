import { certifications } from "../data/certifications";
import CertificationCard from "../components/CertificationCard";
import FadeIn from "../components/FadeIn";

export default function Certifications({ darkMode }) {
    return (
        <section id="certifications" className={`py-16 transition-colors duration-300 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-50'} min-h-screen`}>
            <div className="container mx-auto px-6 text-center">
                <FadeIn direction="up">
                    <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        My <span className="text-purple-500">Certifications</span>
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <FadeIn key={cert.id} delay={index * 0.15} direction="up" className="h-full">
                            <CertificationCard {...cert} darkMode={darkMode} />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
