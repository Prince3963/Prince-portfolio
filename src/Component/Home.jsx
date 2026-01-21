import React from 'react';
import img from '../assets/Me.jpg';
import githubImage from '../assets/github_icon.png';
import linkdInImage from '../assets/linkedin_logo.png';

import About from './About';
import Skills from './Skill';
import Projects from './Projects';
import Contact from './contact';

const Home = () => {
  return (
    <div>
      {/* 🟢 Intro Section (Hero) */}
      <section
        id="home"
        className="animate-fade-in flex flex-col md:flex-row items-center justify-center gap-16 px-6 bg-gray-900 text-white min-h-screen dark:bg-gray-900 dark:text-white"
      >
        <div className="animate-fade-in flex flex-col md:flex-row items-center justify-center gap-16 px-6 md:px-20 py-20 bg-gray-900 text-white min-h-screen dark:bg-gray-900 dark:text-white">
          {/* Left Section - Image */}
          <div className="flex justify-center mt-2 md:w-1/2 mb-8 md:mb-0">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 scale-105 hover:scale-110 border-blue-500 shadow-[0_0_20px_#3b82f6] hover:shadow-[0_0_30px_#3b82f6] transition-all duration-400">
              <img src={img} alt="Prince Patel" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Section - Description */}
          <div className="md:w-1/2 mt-12 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
              Hi, <br /> I'm <span className="text-blue-500">Prince Patel</span>
            </h2>
            <h3 className="text-xl sm:text-2xl font-light mb-6">
              I'm a passionate <span className="text-blue-400 font-medium">Full-Stack Developer</span><br />
              with 6 months of experience at <span className="text-blue-400 font-medium">Tribase Solution</span> as an intern in building web applications,
              specializing in <span className="text-blue-400 font-medium">React.js</span> & <span className="text-blue-400 font-medium">C# .NET Core</span>.
            </h3>

            {/* Social Icons */}
            <div className='flex justify-center md:justify-start py-4'>
              <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/prince-patel-811562283/" aria-label="LinkedIn Profile">
                <img className='w-10 h-10 hover:shadow-[0_0_30px_#808080] scale-90 hover:scale-100 rounded-full' src={linkdInImage} alt='LinkedIn' />
              </a>
              <a target='_blank' rel='noreferrer' href="https://github.com/Prince3963/" aria-label="GitHub Profile">
                <img className='w-10 h-10 ml-4 hover:shadow-[0_0_30px_#808080] scale-90 hover:scale-100 rounded-full' src={githubImage} alt="GitHub" />
              </a>
            </div>

            {/* Resume Button */}
            <p className="text-sm text-gray-400 mb-3">Looking to collaborate or hire?</p>
            <a
              href="/Prince Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:shadow-[0_0_40px_#3b82f6] transition-all duration-500"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* 🟡 About Section */}
      <section id="about" className="bg-gray-800 text-white dark:bg-gray-800 dark:text-white -mt-20">
        <About />
      </section>

      {/* 🔵 Skills Section */}
      <section id="skills" className="bg-gray-900 text-white sm:px-12 dark:bg-gray-900 dark:text-white">
        <Skills />
      </section>

      {/* 🟣 Projects Section */}
      <section id="projects" className="bg-gray-800 text-white dark:bg-gray-800 dark:text-white">
        <Projects />
      </section>

      {/* 🔴 Contact Section */}
      <section id="contact" className="bg-gray-900 text-white dark:bg-gray-900 dark:text-white">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
