export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 text-center"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
          About <span className="text-purple-600">Me</span>
        </h2>

        {/* Intro Paragraph */}
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          Hello! I’m <span className="font-semibold text-purple-700">Shivani</span>, a dedicated student and
          passionate web developer who loves turning creative ideas into modern, responsive, and
          visually engaging websites. My approach combines thoughtful design with clean and efficient
          code, ensuring both beauty and performance in every project.
        </p>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">🎯 Mission</h3>
            <p className="text-gray-600">
              To design and build user-friendly, efficient web interfaces that create meaningful
              digital experiences while continuously learning and improving.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">💡 Interests</h3>
            <p className="text-gray-600">
              Front-end development, UI/UX design, and exploring modern frameworks like React and
              Tailwind CSS. I also enjoy creating elegant designs with attention to detail.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">🚀 Goals</h3>
            <p className="text-gray-600">
              To grow as a professional developer, contribute to innovative projects, and make a
              positive impact through technology and design.
            </p>
          </div>
        </div>

        {/* Closing Paragraph */}
        <p className="text-gray-700 text-lg mt-16 max-w-3xl mx-auto leading-relaxed">
          I believe learning never stops. Whether it’s mastering new frameworks, refining my
          problem-solving skills, or experimenting with design, I’m always striving to evolve.
          My ultimate goal is to build projects that inspire and help others.
        </p>
      </div>
    </section>
  );
}
