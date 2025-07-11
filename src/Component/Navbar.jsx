import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // optional: icon library like lucide or heroicons
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? 'text-yellow-400'
      : 'hover:text-gray-300 transition duration-200';

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full shadow-md z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">
            <NavLink to="/" onClick={closeMenu} className="hover:text-blue-500">
              Prince Portfolio
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-70} // navbar height adjust karne ke liye
                className="cursor-pointer hover:text-blue-500 transition duration-300"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70} // Adjusting for fixed navbar
                className="cursor-pointer hover:text-blue-500 transition duration-300"
                onClick={closeMenu}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                offset={-70} // Adjusting for fixed navbar
                className="cursor-pointer hover:text-blue-500 transition duration-300"
                onClick={closeMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70} // Adjusting for fixed navbar
                className="cursor-pointer hover:text-blue-500 transition duration-300"
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70} // Adjusting for fixed navbar
                className="cursor-pointer hover:text-blue-500 transition duration-300"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-4 p-4 bg-gray-800 rounded-lg">
            <Link to="home" smooth={true} duration={500} offset={-70} className={`${navLinkStyle} block`} onClick={closeMenu}>
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} offset={-70} className={`${navLinkStyle} block`} onClick={closeMenu}>
              About Me
            </Link>
            <Link to="skills" smooth={true} duration={500} offset={-70} className={`${navLinkStyle} block`} onClick={closeMenu}>
              Skills
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-70} className={`${navLinkStyle} block`} onClick={closeMenu}>
              Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-70} className={`${navLinkStyle} block`} onClick={closeMenu}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
