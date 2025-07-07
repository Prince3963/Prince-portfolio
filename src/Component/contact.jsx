import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-20 px-4">
      <div className="flex flex-wrap md:flex-row items-start mt-20 justify-center gap-10">
        {/* Form Container */}
        <div className="bg-blue-950 rounded-2xl p-6 shadow-lg w-full md:w-[400px]">
          <h2 className="text-2xl font-semibold text-center mb-6">Contact Me</h2>
          
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-white text-black rounded-xl p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white text-black rounded-xl p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            placeholder="Enter your message"
            rows="4"
            className="bg-white text-black rounded-xl p-3 w-full mb-6 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          {/* Button */}
          <div className="flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-xl transition-all duration-200">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
