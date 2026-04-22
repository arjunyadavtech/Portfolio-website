// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="min-h-screen bg-gray-900 text-white px-6 py-20 flex items-center justify-center"
//     >
//       <div className="max-w-2xl w-full text-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>

//         <p className="text-gray-400 mb-8">
//           I'm open to opportunities and collaborations. Let’s build something
//           great together.
//         </p>

//         <div className="space-y-4">
//           <a
//             href="mailto:arjunyadav.developer@gmail.com"
//             className="block bg-blue-500 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition px-6 py-3 rounded-lg font-semibold"
//           >
//             Send Email
//           </a>

//           <a
//             href="https://github.com/arjunyadavtech"
//             target="_blank"
//             className="block border border-gray-700 hover:bg-gray-800 hover:border-blue-500 transition px-6 py-3 rounded-lg"
//           >
//             GitHub
//           </a>

//           <a
//             href="https://linkedin.com/in/yourprofile"
//             target="_blank"
//             className="block border border-gray-700 hover:bg-gray-800 transition px-6 py-3 rounded-lg"
//           >
//             LinkedIn
//           </a>
//         </div>

//         <p className="text-gray-500 mt-10">
//         © {new Date().getFullYear()} Arjun. Built with React & Tailwind.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// ContactSection.jsx
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    type: "Hiring",
  });

  const [errors, setErrors] = useState({});

  // 🔍 Validation
  const validate = (field, value) => {
    let error = "";

    if (field === "name" && value.trim().length < 3) {
      error = "Name must be at least 3 characters";
    }

    if (field === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Enter a valid email";
    }

    if (field === "message" && value.trim().length < 10) {
      error = "Message must be at least 10 characters";
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validate(name, value);
  };

  // 📩 Mailto Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Final check
    if (Object.values(errors).some((err) => err)) return;

    const subject = encodeURIComponent(`Portfolio Contact - ${form.type}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    const mailto = `mailto:arjun.yadav.emgineer@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;
  };

  return (
    <section className="relative py-20 px-6 md:px-16 bg-[#0a0a0a] text-white">
      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 mt-4 max-w-md">
            Have an idea, opportunity, or project? I’m open to internships,
            roles, and collaborations.
          </p>

          {/* 24h Badge */}
          <div className="mt-6 inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-400/20 text-green-400 text-sm">
            ⚡ Responds within 24 hours
          </div>

          {/* Direct Contact */}
          <div className="mt-6 space-y-2 text-gray-300">
            <div>
              <a href="mailto:arjunyadav.developer@gmail.com" target="_blank">
                arjun.yadav.engineer@gmail.com
              </a>
            </div>

            <div>
              <a href="https://github.com/arjunyadavtech" target="_blank">
                GitHub
              </a>
            </div>
            <div>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl space-y-4 shadow-xl">
          {/* NAME */}
          <div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />
            {errors.name && (
              <p className="text-red-400 text-sm">{errors.name}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email}</p>
            )}
          </div>

          {/* TYPE */}
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white">
            <option>Hiring</option>
            <option>Collaboration</option>
            <option>Freelance</option>
            <option>Networking</option>
          </select>

          {/* MESSAGE */}
          <div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />
            {errors.message && (
              <p className="text-red-400 text-sm">{errors.message}</p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
