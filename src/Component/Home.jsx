import React from 'react';
import img from '../assets/Me.jpg';
import githubImage from '../assets/github_icon.png';
import linkdInImage from '../assets/linkedin_logo.png';

const Home = () => {
  return (
    <div className="animate-fade-in flex flex-col-reverse md:flex-row items-center justify-center gap-16 px-6 md:px-20 py-20 bg-gray-900 text-white min-h-screen">
      
      {/* Left Section - Image */}
      <div className="md:w-1/2 flex justify-center">
        <div className="w-72 h-72 rounded-full overflow-hidden border-4 scale-105 hover:scale-110 border-blue-500 shadow-[0_0_20px_#3b82f6] hover:shadow-[0_0_30px_#3b82f6] transition-all duration-400">
          <img src={img} alt="Prince Patel" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Right Section - Description */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-5xl font-extrabold leading-tight mb-4">
          Hi, <br /> I'm <span className="text-blue-500">Prince Patel</span>
        </h2>
        <h3 className="text-2xl font-light mb-6">
          I'm a passionate <span className="text-blue-400 font-medium">Full-Stack Developer</span><br />
          with six months of experience as an intern in building web applications,
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
        <p className="text-sm text-gray-400 mb-2">Looking to collaborate or hire?</p>
        <a
          href="/Prince_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:shadow-[0_0_40px_#3b82f6] transition-all duration-500"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
