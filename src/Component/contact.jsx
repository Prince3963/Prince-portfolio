import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-20 px-4">
      <div className="flex flex-wrap md:flex-row items-start mt-20 justify-center gap-10">
        {/* Form Container */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl w-full md:w-[500px]">
          <h2 className="text-3xl font-bold text-blue-500 text-center mb-2">Contact Me</h2>
         

          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-white text-black border border-blue-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-black border border-blue-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                placeholder="Enter your message"
                rows="4"
                className="bg-white text-black border border-blue-300 rounded-lg p-3 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
