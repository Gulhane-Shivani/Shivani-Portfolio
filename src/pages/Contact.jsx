import { Mail, Phone, MapPin, Send, MessageCircle, Github, Linkedin } from "lucide-react";

export default function Contact({ darkMode }) {
  // Dark mode specific colors for inputs
  const inputBg = darkMode ? "bg-gray-800" : "bg-gray-50";
  const inputBorder = darkMode ? "border-gray-700" : "border-gray-200";
  const labelColor = darkMode ? "text-gray-300" : "text-gray-700";
  const containerBg = darkMode ? "bg-gray-900 border-t border-gray-800" : "bg-white shadow-lg";

  return (
    <section
      id="contact"
      className={`relative py-20 min-h-screen flex items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-gray-950' : 'bg-gray-100'}`}
    >
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-6xl">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 rounded-3xl overflow-hidden shadow-2xl ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white'}`}>

          {/* Left Panel: Contact Info */}
          <div className={`p-10 lg:p-14 flex flex-col justify-between ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
            <div>
              <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Let's <span className="text-blue-500">Connect</span>
              </h2>
              <p className={`mb-12 text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm currently available for freelance work or full-time opportunities. If you have a project that needs some creative touch, I'd love to hear about it!
              </p>

              <div className="space-y-8">
                <ContactItem
                  icon={<Mail />}
                  label="Email"
                  value="shivanigulhane2002@gmail.com"
                  href="mailto:shivanigulhane2002@gmail.com"
                  darkMode={darkMode}
                />
                <ContactItem
                  icon={<Phone />}
                  label="Phone"
                  value="+91 7719030069"
                  href="tel:+917719030069"
                  darkMode={darkMode}
                />
                <ContactItem
                  icon={<MapPin />}
                  label="Location"
                  value="Pune, Maharashtra, India"
                  darkMode={darkMode}
                />
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <h4 className={`text-sm font-semibold mb-4 uppercase tracking-wider ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Socials</h4>
              <div className="flex gap-4">
                {/* Add social links here if needed */}
                <a
                  href="https://github.com/Gulhane-Shivani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${darkMode
                    ? "bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700"
                    : "bg-gray-50 text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300"
                    }`}
                  title="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shivani-gulhane-5b2519288/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${darkMode
                    ? "bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700"
                    : "bg-gray-50 text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300"
                    }`}
                  title="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="p-10 lg:p-14">
            <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Send Message</h2>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className={`text-sm font-medium ${labelColor}`}>Name *</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-2 transition-all ${inputBg} ${inputBorder} ${darkMode ? 'text-white placeholder-gray-500 focus:ring-blue-500 focus:border-transparent' : 'text-gray-900 placeholder-gray-400 focus:ring-blue-500'}`}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className={`text-sm font-medium ${labelColor}`}>Email *</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@domain.com"
                    className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-2 transition-all ${inputBg} ${inputBorder} ${darkMode ? 'text-white placeholder-gray-500 focus:ring-blue-500 focus:border-transparent' : 'text-gray-900 placeholder-gray-400 focus:ring-blue-500'}`}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className={`text-sm font-medium ${labelColor}`}>Subject *</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can I help you?"
                  className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-2 transition-all ${inputBg} ${inputBorder} ${darkMode ? 'text-white placeholder-gray-500 focus:ring-blue-500 focus:border-transparent' : 'text-gray-900 placeholder-gray-400 focus:ring-blue-500'}`}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className={`text-sm font-medium ${labelColor}`}>Message *</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-2 transition-all resize-none ${inputBg} ${inputBorder} ${darkMode ? 'text-white placeholder-gray-500 focus:ring-blue-500 focus:border-transparent' : 'text-gray-900 placeholder-gray-400 focus:ring-blue-500'}`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href, darkMode }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className={`p-4 rounded-xl shrink-0 transition-colors ${darkMode ? 'bg-gray-700 text-blue-400 group-hover:bg-blue-600 group-hover:text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
        {icon}
      </div>
      <div>
        <h4 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{label}</h4>
        {href ? (
          <a href={href} className={`text-lg font-medium hover:text-blue-500 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {value}
          </a>
        ) : (
          <p className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {value}
          </p>
        )}
      </div>
    </div>
  );
}
