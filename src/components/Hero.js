import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between py-4 md:py-8 lg:py-12">
        <div className="w-full md:w-1/2 lg:w-1/3 text-center flex justify-center flex-col">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 mt-24 md:mt-40 lg:mt-48">
            <span>LET'S</span>
            <br />
            <span className="md:ml-10 lg:ml-20">VOTE</span>
          </h1>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 mt-16 md:mt-24 lg:mt-32">
              Be a part of decision
            </h2>
            <div className="mb-7"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-500 mb-4">
              Vote Today
            </h1>
            <div className="mb-12"></div>
            <div className="flex flex-col items-center mb-4 md:mb-8 lg:mb-12">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 mb-4">
                <Link to="/registrationform">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 md:py-3 lg:py-4 px-4 md:px-6 lg:px-8 rounded">
                    REGISTER
                  </button>
                </Link>
                <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 md:py-3 lg:py-4 px-4 md:px-6 lg:px-8 rounded">
                  Login
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;