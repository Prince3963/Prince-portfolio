import React from 'react';
import car from '../assets/CarRental.png';
import yummster from '../assets/Yummster.png';
import realEstate from '../assets/realEstate.png';
import eBazzar from '../assets/ebazzar.png';

const projects = [
  {
    title: 'Car Rental Application',
    img: car,
    timeline: 'Jan 2023 - Feb 2023',
    type: 'Mini Project',
    description: [
      'Admin: Manage car records.',
      'Client: Login, select cars, and process payments.',
    ],
    link: 'https://car-rental-example.com',
  },
  {
    title: 'Yummsters (Online Restaurant)',
    img: yummster,
    type: 'Main Project',
    description: [
      'Admin: Manage cuisines and discounts.',
      'Client: Order food, reserve tables.',
      'Manager: Facilitate order management.',
    ],
    link: 'https://yummster-example.com',
  },
  {
    title: 'Real Estate Website',
    img: realEstate,
    type: 'ICT Sem-1',
    description: [
      'Admin, Seller, and Buyer roles.',
      'Search based on price, location, and type.',
    ],
    link: 'https://real-estate-example.com',
  },
  {
    title: 'eBazzar (Online Shopping)',
    img: eBazzar,
    type: 'ICT Sem-2',
    description: [
      'Built using .NET (C#) backend and React.js frontend.',
    ],
    link: 'https://ebazzar-example.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white px-6 py-20 mt-4 min-h-screen">
      <h2 className="text-center text-4xl font-bold mb-14">My Projects</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md p-5 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4 transition-transform duration-500 hover:scale-105"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-2">
              <strong>Project Type:</strong> {project.type}
            </p>
            {project.timeline && (
              <p className="text-sm text-gray-300 mb-2">
                <strong>Timeline:</strong> {project.timeline}
              </p>
            )}
            <ul className="list-disc list-inside text-sm text-gray-400 mt-2 space-y-1">
              {project.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
