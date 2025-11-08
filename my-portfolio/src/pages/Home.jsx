export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 px-6"
    >
      <div className="relative">
        {/* Profile Image with Glow Effect */}
        <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-full opacity-40 w-48 h-48 mx-auto"></div>
        <img
          src="/assets/profile.jpg"
          alt="Shivani"
          className="relative w-44 h-44 rounded-full border-4 border-white shadow-lg object-cover mb-6"
        />
      </div>

      {/* Main Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-3">
        Hi, I'm <span className="text-blue-600">Shivani</span>
      </h2>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-xl">
        A passionate <span className="font-semibold text-indigo-600">Web Developer</span> who loves crafting
        modern, responsive, and elegant web experiences using React, Tailwind CSS, and JavaScript.
      </p>

      {/* Profile Description */}
      <p className="text-gray-600 max-w-2xl leading-relaxed mb-8">
        I'm a dedicated student with a strong interest in front-end development, UI design, and
        user experience. My goal is to create websites that are not only visually appealing but
        also intuitive and efficient. I’m constantly learning and improving my skills in modern
        web technologies.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition"
        >
          View My Work
        </a>
        <a
          href="mailto:shivanistudent@example.com"
          className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition"
        >
          Contact Me
        </a><a
          href="mailto:shivanistudent@example.com"
          className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition"
        >
          projects
        </a>
      </div>
    </section>
  );
}
