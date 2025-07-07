import React from 'react';
import car from '../assets/CarRental.png';
import yummster from '../assets/Yummster.png';
import realEstate from '../assets/realEstate.png';
import eBazzar from '../assets/ebazzar.png';

const Projects = () => {
    return (
        <div className="flex flex-col items-center px-8 md:px-24 py-20 bg-gray-900 text-white min-h-screen mt-4">
            {/* Section title */}
            <div className="text-4xl font-bold mb-10 text-center">
                My Projects
            </div>

            {/* Projects list */}
            <div className="flex flex-col md:flex-row gap-8 text-center">
                {/* Project Card 1 */}
                <div className="bg-gray-800 scale-100 hover:scale-95 p-4 rounded-lg shadow-md">
                    <img
                        src={car}
                        alt="Car rental project"
                        className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-semibold">Car Rental Application</h3>
                    <p className="text-sm mt-2">
                        <strong>Timeline:</strong> Jan 2023 - Feb 2023 <br />
                        <strong>Type:</strong> Mini Project <br />
                        Developed an application for car rental with two panels:
                        <ul className="list-disc pl-5 mt-2 text-left">
                            <li>Admin: Manage car records.</li>
                            <li>Client: Login, select cars, and process payments.</li>
                        </ul>
                    </p>
                </div>

                {/* Project Card 2 */}
                <div className="bg-gray-800 scale-100 hover:scale-95 p-4 rounded-lg shadow-md">
                    <img
                        src={yummster}
                        alt="Food application project"
                        className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-semibold">Yummsters (Online Restaurant)</h3>
                    <p className="text-sm mt-2">
                        <strong>Type:</strong> Main Project <br />
                        Created an online restaurant application and website with three panels:
                        <ul className="list-disc pl-5 mt-2 text-left">
                            <li>Admin: Manage cuisines and discounts.</li>
                            <li>Client: Order food, reserve tables.</li>
                            <li>Manager: Facilitate order management.</li>
                        </ul>
                    </p>
                </div>

                {/* Project Card 3 */}
                <div className="bg-gray-800 scale-100 hover:scale-95 p-4 rounded-lg shadow-md">
                    <img
                        src={realEstate}
                        alt="Real estate web project"
                        className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-semibold">Real Estate Website</h3>
                    <p className="text-sm mt-2">
                        <strong>Project Type:</strong> ICT Sem-1 <br />
                        Created a website with role-based controls for:
                        <ul className="list-disc pl-5 mt-2 text-left">
                            <li>Admin, Seller, and Buyer roles.</li>
                            <li>Search functionality based on price range, location, and property type.</li>
                        </ul>
                    </p>
                </div>

                {/* Project Card 4 */}
                <div className="bg-gray-800 scale-100 hover:scale-95 p-4 rounded-lg shadow-md">
                    <img
                        src={eBazzar}
                        alt="Online shopping project"
                        className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-semibold">eBazzar (Online Shopping)</h3>
                    <p className="text-sm mt-2">
                        <strong>Project Type:</strong> ICT Sem-2 <br />
                        Developed using .NET Framework (C#) with frontend implemented in React.js.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;
