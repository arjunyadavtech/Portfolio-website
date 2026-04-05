const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>

        <p className="text-gray-400 mb-8">
          I'm open to opportunities and collaborations. Let’s build something
          great together.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:arjunyadav.developer@gmail.com"
            className="block bg-blue-500 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition px-6 py-3 rounded-lg font-semibold"
          >
            Send Email
          </a>

          <a
            href="https://github.com/arjunyadavtech"
            target="_blank"
            className="block border border-gray-700 hover:bg-gray-800 hover:border-blue-500 transition px-6 py-3 rounded-lg"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="block border border-gray-700 hover:bg-gray-800 transition px-6 py-3 rounded-lg"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-gray-500 mt-10">
        © {new Date().getFullYear()} Arjun. Built with React & Tailwind.
        </p>
      </div>
    </section>
  );
};

export default Contact;

