import { Building2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Building2 className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-semibold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>JakEstate</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className={`hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Home</a>
            <a href="#" className={`hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>About</a>
            <a href="#" className={`hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Projects</a>
            <a href="#" className={`hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Testimonials</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;