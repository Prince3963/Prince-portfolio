import React from 'react';
import img from '../assets/About_image.svg';
import githubImage from '../assets/github_icon.png';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly px-8 md:px-24 py-20 bg-gray-900 text-white min-h-screen mt-4">

      {/* Left Section - Description */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-end mr-28">
        <div className="w-96 h-96 overflow-hidden scale-105 hover:rotate-5 transition-all hover:duration-900">
          <img
            src={img}
            alt="Prince Patel"
            className="w-full h-full "
          />
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 ml-28">
        <h2 className="text-4xl font-extrabold leading-tight mb-4">
          <span className="text-blue-100"> Let me introduced myself</span>
        </h2>

        <h3 className="text-xl font-light leading-relaxed mb-6">
          I am a passionate and dedicated Full Stack Developer with a strong foundation in
          <span className="text-blue-400 font-medium"> React.js </span> and
          <span className="text-blue-400 font-medium"> C# .NET Core</span>.
          <br /><br />
          I recently completed a 6-month internship at
          <span className="text-blue-400 font-medium"> Ttribase Solution</span>, where I gained hands-on experience working on real-world development projects. During this time, I sharpened my skills across both frontend and backend, collaborating in agile teams and contributing to live applications.
          <br /><br />
          Currently, I am actively working on website development projects to deepen my expertise in full-stack technologies and stay aligned with modern development practices.
        </h3>

       
      </div>


    </div>
  );
}

export default About;
