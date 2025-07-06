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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

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
            <button
              onClick={() => scrollToSection("hero")}
              className={`hover:text-blue-600 transition-colors duration-200 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`hover:text-blue-600 transition-colors duration-200 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`hover:text-blue-600 transition-colors duration-200 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`hover:text-blue-600 transition-colors duration-200 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`hover:text-blue-600 transition-colors duration-200 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Contact
            </button>
          </div>

          {/* Button Mobile Menu */}
          <button
            className={`md:hidden focus:outline-none ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
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
          <button
            onClick={() => scrollToSection("hero")}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
