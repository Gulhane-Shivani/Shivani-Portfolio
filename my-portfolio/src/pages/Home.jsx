import "../styles/global.css"; // make sure this line is present if you keep animations in global.css

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-animate px-6 overflow-hidden"
    >
      {/* Profile Image with Floating Animation */}
      <div className="relative animate-float">
        <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-full opacity-40 w-48 h-48 mx-auto"></div>
        <img
          src="/assets/profile.jpg"
          alt="Shivani"
          className="relative w-44 h-44 rounded-full border-4 border-white shadow-lg object-cover mb-6"
        />
      </div>

      {/* Main Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-3">
        Hi, I'm <span className="text-purple-600">Shivani</span>
      </h2>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-xl">
        A passionate <span className="font-semibold text-purple-700">Web Developer</span> who enjoys building
        beautiful, responsive, and user-friendly web experiences using React and Tailwind CSS.
      </p>

      {/* Profile Description */}
      <p className="text-gray-600 max-w-2xl leading-relaxed">
        I'm a creative and detail-oriented student who loves combining design and technology.
        My focus lies in crafting digital experiences that are both functional and visually
        delightful. I continuously explore modern tools and frameworks to sharpen my skills and
        deliver quality work.
      </p>
    </section>
  );
}
