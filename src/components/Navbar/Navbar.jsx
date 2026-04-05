const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white px-6 py-4 flex justify-between items-center border-b border-gray-800">
      
      <h1 className="text-xl font-bold">Arjun</h1>

      <div className="space-x-6 hidden md:block">
        <a href="#home" className="hover:text-blue-400">Home</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>

    </nav>
  );
};

export default Navbar;