const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white pt-24 flex items-center"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent blur-3xl"></div>
      {/* container */}
      <div
        id="hero-container"
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
      >
        {/* flex lay-out  */}
        <div
          id="hero-layout"
          className="flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {/* hero-left */}
          <div
            id="hero-left"
            className="flex-1 text-left space-y-6 animate-fadeIn"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Arjun
              </span>
              <br />
              <span className="text-gray-400 text-2xl md:text-3xl font-medium">
                I build scalable web experiences
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
              I design and develop high-performance web applications with clean
              UI, scalable architecture, and real-world impact.
            </p>

            <div className="flex gap-4">
              <button
                className="bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View Work
              </button>
              <button
                className="border border-gray-600 px-6 py-3 rounded-lg  hover:bg-gray-700 transition duration-300 hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </button>
            </div>
          </div>
          {/* hero-right */}
          <div
            id="hero-right"
            className="flex-1 h-[300px] lg:h-[400px]
            bg-gradient-to-br from-gray-900 to-gray-800  
            border border-gray-700 rounded-xl 
            shadow-2xl shadow-blue-500/10 
            transition duration-500 
            p-6 
            hover:scale-[1.02] 
            hover:shadow-blue-500/20
            will-change-transform"
          >
            {/* glow up on hero-righttop */}
            <div className="h-[2px] w-full bg-gradient-to-r from-blue-500/60 via-transparent to-transparent mb-4"></div>
            <div className="h-full flex flex-col justify-between">
              {/* 3 dotss  */}
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              {/* inro about me  */}
              <div className="text-sm font-mono text-gray-300 space-y-3 leading-relaxed max-w-[90%]">
                <p>
                  <span className="text-blue-400">const</span> engineer = &#123;
                </p>

                <p className="ml-4">
                  focus:{" "}
                  <span className="text-green-400">'Scalable Systems'</span>,
                </p>

                <p className="ml-4">
                  stack:{" "}
                  <span className="text-green-400">
                    ['React', 'Node', 'Tailwind']
                  </span>
                  ,
                </p>

                <p className="ml-4">
                  principles:{" "}
                  <span className="text-green-400">
                    ['Performance', 'Clean UI', 'Maintainability']
                  </span>
                  ,
                </p>

                <p className="ml-4">
                  currentGoal:{" "}
                  <span className="text-green-400">
                    'Building production-ready apps'
                  </span>
                  ,
                </p>

                <p>&#125;</p>
                {/* <p className="animate-pulse">
                  <span className="text-blue-400">const</span> developer ={"{"}
                </p>
                <p className="ml-4">
                  name: <span className="text-green-400">'Arjun'</span>,
                </p>
                <p className="ml-4">
                  skills:{" "}
                  <span className="text-green-400">['React', 'Node']</span>,
                </p>
                <p className="ml-4">
                  passion:{" "}
                  <span className="text-green-400">
                    'Building scalable apps'
                  </span>
                </p>
                <p>&#125;</p> */}
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-blue-500/10 blur-2xl"></div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Hero;
