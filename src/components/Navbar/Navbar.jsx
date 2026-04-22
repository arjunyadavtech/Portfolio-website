import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Scroll tracking (active section + navbar style)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];

      // Navbar background change
      setScrolled(window.scrollY > 50);

      // Active section detection
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 120;
          const height = element.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Projects", "About", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <h1 className="text-xl text-white font-bold tracking-wide cursor-pointer hover:text-blue-400 transition">
        Arjun.dev
      </h1>

      {/* Desktop Menu */}
      <div className="space-x-8 hidden md:flex items-center">
        {navItems.map((item) => {
          const id = item.toLowerCase();
          return (
            <a
              key={item}
              href={`#${id}`}
              className={`relative transition ${
                active === id ? "text-blue-400" : "text-white"
              }`}
            >
              {item}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${
                  active === id ? "w-full" : "w-0"
                }`}
              ></span>
            </a>
          );
        })}

        {/* CTA */}
        <a
          href="#contact"
          className="ml-4 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition hover:scale-105"
        >
          Hire Me
        </a>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        {isOpen ? (
          <X
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
          />
        ) : (
          <Menu
            onClick={() => setIsOpen(true)}
            className="cursor-pointer"
          />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center space-y-6 py-6 md:hidden">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className={`transition ${
                  active === id ? "text-blue-400" : "text-white"
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;