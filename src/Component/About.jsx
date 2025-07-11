import React from 'react';
import img from '../assets/About_image.svg';

const About = () => {
  return (
    <section id="about" className="flex flex-col-reverse md:flex-row items-center justify-evenly md:px-24 bg-gray-900 text-white min-h-screen">

      {/* Left Section - Description */}
      <div className="md:w-1/2 text-center md:text-left md:ml-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
          <span className="text-blue-100">Let me introduce myself</span>
        </h2>

        <h3 className="text-base sm:text-lg md:text-xl font-light leading-relaxed mb-6">
          I am a passionate and dedicated Full Stack Developer with a strong foundation in
          <span className="text-blue-400 font-medium"> React.js </span> and
          <span className="text-blue-400 font-medium"> C# .NET Core</span>.
          <br /><br />
          I recently completed a 6-month internship at
          <span className="text-blue-400 font-medium"> Tribase Solution</span>, where I gained hands-on experience working on real-world development projects.
          <br /><br />
          Currently, I am actively working on website development projects to deepen my expertise in full-stack technologies and stay aligned with modern development practices.
        </h3>

        <p className="text-sm text-gray-400 mb-4">
          Tools I work with: React, .NET Core, Tailwind, SQL Server, Git, Postman
        </p>

      </div>

      {/* Right Section - Image */}
      <div className="flex justify-center mb-10 md:mb-0 md:w-1/2">
        <div className="w-64 h-64 sm:w-74 sm:h-72 md:w-96 md:h-96 overflow-hidden scale-105 hover:rotate-3 transition-transform duration-700">
          <img
            src={img}
            alt="Prince Patel"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

    </section>
  );
}

export default About;
