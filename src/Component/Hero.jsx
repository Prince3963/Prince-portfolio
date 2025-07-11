import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-blue-900 text-white min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="text-center">
        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4">
          Welcome to My Portfolio
        </h1>

        {/* Sub-heading */}
        <p className="text-lg sm:text-xl font-light mb-8">
          I am a passionate Full-Stack Developer skilled in React.js, C# .NET Core, and more.
        </p>

        {/* Call-to-action Button */}
        <a
          href="#contact" // Adjust this link to your contact section
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-600 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
