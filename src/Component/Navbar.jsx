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
    <nav className="bg-gray-800  text-white fixed top-0 left-0 w-full shadow-md z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold ">
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
      offset={-70}
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
      offset={-70}
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
      offset={-70}
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
      offset={-70}
      className="cursor-pointer hover:text-blue-500 transition duration-300"
      onClick={closeMenu}
    >
      Contact
    </Link>
  </li>
</ul>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <NavLink to="/" className={navLinkStyle} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" className={navLinkStyle} onClick={closeMenu}>About Me</NavLink>
            <NavLink to="/skills" className={navLinkStyle} onClick={closeMenu}>Skills</NavLink>
            <NavLink to="/projects" className={navLinkStyle} onClick={closeMenu}>Projects</NavLink>
            <NavLink to="/contact" className={navLinkStyle} onClick={closeMenu}>Contact</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;