import { Download, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Resume({ darkMode }) {
    const resumeUrl = "/assets/resume/Shivani_Gulhane_MCA_2026.pdf";

    return (
        <section className={`min-h-screen py-16 px-6 transition-colors duration-300 ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="container mx-auto max-w-4xl">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div className="flex items-center gap-3">
                        <Link
                            to="/"
                            className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-white text-gray-600 shadow-sm'}`}
                        >
                            <ArrowLeft size={22} />
                        </Link>
                        <div>
                            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                                My Resume
                            </h1>
                            <p className={`text-xs mt-0.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                Shivani Gulhane • MCA 2026
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a
                            href={resumeUrl}
                            download="Shivani_Gulhane_Resume.pdf"
                            className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/20"
                        >
                            <Download size={18} />
                            Download PDF
                        </a>
                    </div>
                </div>

                {/* PDF Viewer */}
                <div className={`relative w-full aspect-[1/1.3] rounded-2xl overflow-hidden shadow-xl border ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                    <iframe
                        src={`${resumeUrl}#toolbar=0`}
                        className="w-full h-full border-none"
                        title="Shivani Gulhane Resume"
                    >
                        <div className="flex flex-col items-center justify-center h-full p-10 text-center">
                            <p className="text-xl mb-4">Your browser doesn't support PDF embedding.</p>
                            <a href={resumeUrl} className="text-purple-500 font-bold underline">Click here to view the PDF</a>
                        </div>
                    </iframe>

                    {/* Overlay to prevent some iframe interactions in certain browsers if needed, or just a decorative frame */}
                    <div className="absolute inset-0 pointer-events-none border-2 border-transparent rounded-2xl"></div>
                </div>

                {/* Mobile alternative link */}
                <div className="mt-8 text-center md:hidden">
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Can't see the PDF?
                        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="ml-2 text-purple-500 font-bold underline">
                            Open Directly
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
