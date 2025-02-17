import { Building2, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Building2
              className={`h-8 w-8 ${
                isScrolled ? "text-blue-600" : "text-white"
              }`}
            />
            <span
              className={`ml-2 text-xl font-semibold ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              JakEstate
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className={`hover:text-blue-600 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Home
            </a>
            <a
              href="#"
              className={`hover:text-blue-600 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              About
            </a>
            <a
              href="#"
              className={`hover:text-blue-600 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Projects
            </a>
            <a
              href="#"
              className={`hover:text-blue-600 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Testimonials
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Sign up
            </button>
          </div>

          {/* Button Mobile Menu */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Projects
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Testimonials
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
