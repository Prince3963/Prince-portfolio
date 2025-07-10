import React from 'react';
import img from '../assets/About_image.svg';

const About = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center overflow-y-auto justify-evenly px-6 md:px-24  bg-gray-900 text-white min-h-screen ">
      
      {/* Left Section - Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end md:mr-12">
        <div className="w-80 h-80 md:w-96 md:h-96 overflow-hidden scale-105 hover:rotate-3 transition-transform duration-700">
          <img
            src={img}
            alt="Prince Patel"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Right Section - Description */}
      <div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left md:ml-12">
        <h2 className="text-4xl font-extrabold leading-tight mb-4">
          <span className="text-blue-100">Let me introduce myself</span>
        </h2>

        <h3 className="text-lg md:text-xl font-light leading-relaxed mb-6">
          I am a passionate and dedicated Full Stack Developer with a strong foundation in
          <span className="text-blue-400 font-medium"> React.js </span> and
          <span className="text-blue-400 font-medium"> C# .NET Core</span>.
          <br /><br />
          I recently completed a 6-month internship at
          <span className="text-blue-400 font-medium"> Ttribase Solution</span>, where I gained hands-on experience working on real-world development projects.
          <br /><br />
          Currently, I am actively working on website development projects to deepen my expertise in full-stack technologies and stay aligned with modern development practices.
        </h3>

        <p className="text-sm text-gray-400 mb-4">
          Tools I work with: React, .NET Core, Tailwind, SQL Server, Git, Postman
        </p>

        
      </div>
    </section>
  );
}

export default About;
