const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 py-20 flex items-center"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-400 mb-4">
            I turn ideas into real-world web applications that are fast, responsive, and user-focused.
          </p>

          <p className="text-gray-400 mb-4">
           I specialize in React and modern frontend tools, turning ideas into functional products with clean UI and solid performance.
          </p>

          <p className="text-gray-400">
          Currently, I’m actively building projects and improving my full-stack skills to become a complete developer.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-2xl font-semibold mb-4">
            Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition cursor-default">React</span>
            <span className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition cursor-default">JavaScript</span>
            <span className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition cursor-default">Tailwind</span>
            <span className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition cursor-default">HTML</span>
            <span className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition cursor-default">CSS</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;