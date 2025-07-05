import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="ml-6 mr-6 mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">
            <Link to="/" className="hover:text-gray-300">
              Prince Portfolio
            </Link>
          </div>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-300 cursor-pointer" aria-label="Go to Home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300 cursor-pointer" aria-label="Go to About Me">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/skills" className="hover:text-gray-300 cursor-pointer" aria-label="Go to Skills">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gray-300 cursor-pointer" aria-label="Go to Projects">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300 cursor-pointer" aria-label="Go to Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
