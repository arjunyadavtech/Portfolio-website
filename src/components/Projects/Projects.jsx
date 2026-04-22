import NetflixCloneImg from "../../assets/Netflix-clone.png";
import CreditCardAiAdvisorZoomImg from "../../assets/CreditCardAiAdvisorZoom.png";
import TodoApp from "../../assets/TodoApp.png";
import ResumeAnalyzer from "../../assets/ResumeAnalyzer1.png";

const projects = [
  {
    title: "Stream X",
    description:
      "Built a Netflix-inspired streaming UI to practice scalable component architecture and responsive layout design. Focused on performance and clean UI structuring.",
    highlight: "Reusable UI system with responsive grid and navigation",
    impact:
      "Demonstrates scalable UI architecture similar to real-world streaming platforms.",
    tech: ["JavaScript", "React", "CSS"],
    github: "https://github.com/arjunyadavtech/netflix-clone",
    live: "https://stream-ui-sigma.vercel.app/",
    image: NetflixCloneImg,
    problem: "Users struggle to navigate large streaming platforms.",
    solution: "Built structured UI with reusable components.",
    decision: "Used React for scalable component architecture.",
  },
  {
    title: "Credit Card Ai Advisor",
    description:
      "AI-powered credit card advisor that recommends the best card based on user spending behavior and financial preferences.",
    highlight: "AI-based recommendation logic for financial decisions",
    impact:
      "Helps users make smarter financial decisions using personalized recommendations.",
    tech: ["JavaScript", "React", "TypeScript"],
    github:
      "https://github.com/arjunyadavtech/ArjunYadav_2021UIC3581_TimesInternet",
    live: "https://credit-card-ai-advisor.vercel.app/",
    image: CreditCardAiAdvisorZoomImg,
  },
  {
    title: "Resume Analyzer",
    description:
      "Built an AI-powered resume analysis platform that evaluates resumes against job descriptions using ATS-like logic. The system parses PDF/DOCX files, extracts skills, computes a match score, and generates actionable improvement suggestions using Google Gemini.",
    highlight: "ATS-style scoring + AI-driven resume improvement suggestions",
    impact:
      "Helps job seekers identify skill gaps, optimize resumes for ATS systems, and improve interview selection chances through data-driven feedback.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Gemini API",
      "pdf2json",
      "mammoth",
      "Prisma",
    ],
    github: "https://github.com/arjunyadavtech/ai-resume-analyzer",
    live: "https://ai-resume-analyzer-coral-omega.vercel.app/",
    image: ResumeAnalyzer,
  },

  // {
  //   title: "TO DO App",
  //   description:
  //     "Developed a React Todo App with dynamic state handling and responsive UI, showcasing core frontend skills in component design, user interaction, and state management.",
  //   highlight: "Real-time task management with dynamic state updates",
  //   impact:
  //     "Improves productivity by enabling efficient real-time task tracking and updates.",
  //   tech: ["JavaScript", "React", "CSS"],
  //   github: "https://github.com/arjunyadavtech/react-todo-app",
  //   live: "https://todo-app-azure-nu-58.vercel.app/",
  //   image: TodoApp,
  // },
];

const Projects = () => {

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white px-6 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Projects
      </h2>

      {/* CARD LAYOUT */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-gradient-to-b from-black to-gray-900 p-6 rounded-xl border border-gray-800 
            transition-all duration-300 cursor-pointer 
          hover:-translate-y-2 hover:shadow-xl hover:border-blue-500/50"
          >
            {/* GLOW LAYER */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-blue-500/5 blur-xl"></div>

            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* CLICKABLE LAYER  */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
              ></a>

              {/* Overlay TEXT */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-sm font-medium text-white">
                  View Live Project
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-3 hover:text-blue-400 transition">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4 mt-2">{project.description}</p>

            {project.highlight && (
              <div className="mb-2">
                <span className="inline-flex items-center gap-2 text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-md border border-blue-500/20">
                  🚀 {project.highlight}
                </span>
              </div>
            )}

            {project.impact && (
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                {project.impact}
              </p>
            )}

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-gray-800 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-2">
              <a
                href={project.github}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-2 text-sm font-medium rounded-md bg-gray-800 hover:bg-gray-700 transition"
              >
                Source Code
              </a>

              <a
                href={project.live}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-2 text-sm font-medium rounded-md bg-blue-600 hover:bg-blue-500 transition  hover:scale-105"
              >
                View Live →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
