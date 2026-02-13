import { certifications } from "../data/certifications";
import CertificationCard from "../components/CertificationCard";

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">
                    My <span className="text-blue-600">Certifications</span>
                </h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    Continuous learning is the key to growth. Here are some of the professional certifications I have earned.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                    {certifications.map((cert) => (
                        <CertificationCard key={cert.id} {...cert} />
                    ))}
                </div>
            </div>
        </section>
    );
}
