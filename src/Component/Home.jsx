import React from 'react';
import Navbar from './Navbar';
import img from '../assets/Me.jpg';
import githubImage from '../assets/github_icon.png';
import linkdInImage from '../assets/linkedin_logo.png'

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly px-8 md:px-24 py-20 bg-gray-900 text-white min-h-screen mt-4">

      {/* Left Section - Description */}
      <div className="md:w-1/2 ml-28">
        <h2 className="text-5xl font-extrabold leading-tight mb-4">
          Hi, <br />I'm <span className="text-blue-500">Prince Patel</span>
        </h2>
        <h3 className="text-2xl font-light mb-6">
          I'm a passionate Full Stack Developer <br />
          specializing in <span className="text-blue-400 font-medium">React.js</span> & <span className="text-blue-400 font-medium">C# .NET Core</span>.
        </h3>

        <div className='flex py-4'>
          <a target='_blank' href="https://www.linkedin.com/in/prince-patel-811562283/">
            <img className='w-10 h-10 hover:shadow-[0_0_30px_#808080] scale-90 hover:scale-100 rounded-full' src={linkdInImage} alt='LinkdIn'/> 
          </a>
          <a target='_blank' href="https://github.com/Prince3963/" >
            <img className='w-10 ml-4 h-10 hover:shadow-[0_0_30px_#808080] scale-90 hover:scale-100 rounded-full' src={githubImage} alt="Github Iamge" />
          </a>
        </div>
        <a
          href="/your-resume-link.pdf" // <-- Change this to actual resume link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full  hover:shadow-[0_0_40px_#3b82f6] transition-all duration-500">
          View Resume
        </a>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-end mr-28">
        <div className="w-75 h-75 rounded-full overflow-hidden border-4 scale-105 hover:scale-110 border-blue-500 shadow-[0_0_20px_#3b82f6] hover:shadow-[0_0_30px_#3b82f6] transition-all hover:duration-400">
          <img
            src={img}
            alt="Prince Patel"
            className="w-full h-full object-cover"
          />
        </div>

      </div>


    </div>
  );
};

export default Home;
