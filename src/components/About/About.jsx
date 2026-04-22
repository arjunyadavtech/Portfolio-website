export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT MINIMAL */}
        <div>
          <p className="text-sm text-blue-400 font-medium mb-2">
            Frontend Developer • React • UI/UX Focused
          </p>

          <h2 className="text-4xl font-bold mb-4">About Me</h2>

          <p className="text-gray-300 mt-4 max-w-md">
            I focus on turning ideas into clean, performant, and user-friendly
            interfaces.
          </p>
        </div>

        {/* RIGHT FULL STORY CARD */}
        <div
          className="bg-[#020617] border border-gray-800 rounded-2xl p-6 font-mono text-sm shadow-xl 
                        hover:scale-[1.02] transition duration-300"
        >
          <p className="text-green-400 mb-3">// My Story</p>

          <p className="text-blue-400">const developer = {"{"}</p>

          <p className="ml-4">
            <span className="text-purple-400">journey</span>:
            <span className="text-yellow-300">
              {" "}
              "Explored multiple domains → found passion in building real
              products"
            </span>
            ,
          </p>

          <p className="ml-4">
            <span className="text-purple-400">currentFocus</span>:
            <span className="text-yellow-300">
              {" "}
              "React, UI/UX, scalable frontend systems"
            </span>
            ,
          </p>

          <p className="ml-4">
            <span className="text-purple-400">skills</span>:
            <span className="text-yellow-300"> ["React", "MERN", "AWS"]</span>,
          </p>

          <p className="ml-4">
            <span className="text-purple-400">goal</span>:
            <span className="text-yellow-300">
              {" "}
              "Build impactful, scalable digital products end-to-end"
            </span>
            ,
          </p>

          <p className="ml-4">
            <span className="text-purple-400">status</span>:
            <span className="text-yellow-300">
              {" "}
              "Building consistently & improving every day"
            </span>
            ,
          </p>

          <p className="text-blue-400">{"}"}</p>
        </div>
      </div>
    </section>
  );
}
