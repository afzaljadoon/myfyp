import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaUserPlus, FaRegRegistered, FaExchangeAlt, FaSignOutAlt, FaBars } from 'react-icons/fa';

const Changephase = () => {
  const [currentPhase, setCurrentPhase] = useState("Voting");

  const changeState = () => {
    const newPhase = currentPhase === "Voting" ? "Closed" : "Voting";
    setCurrentPhase(newPhase);
    // Additional logic such as API calls can be added here
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="h-16 flex items-center justify-center bg-green-500">
          <h1 className="text-2xl font-bold text-white">Best Actor Contest</h1>
        </div>
        <div className="mt-4">
          <ul className="space-y-2">
            <Link to="/candidatedetail">
              <li className="w-full">
                <a className="flex items-center p-4 hover:bg-green-500 hover:text-white">
                  <FaInfoCircle className="text-lg" />
                  <p className="ml-2">Candidate Details</p>
                </a>
              </li>
            </Link>
            <Link to="/addcandidate">
              <li className="w-full">
                <a className="flex items-center p-4 hover:bg-green-500 hover:text-white">
                  <FaUserPlus className="text-lg" />
                  <p className="ml-2">Add Candidate</p>
                </a>
              </li>
            </Link>
            <Link to="/adminregister">
              <li className="w-full">
                <a className="flex items-center p-4 hover:bg-green-500 hover:text-white">
                  <FaRegRegistered className="text-lg" />
                  <p className="ml-2">Register</p>
                </a>
              </li>
            </Link>
            <Link to="/changephase">
              <li className="w-full">
                <a className="flex items-center p-4 hover:bg-green-500 hover:text-white">
                  <FaExchangeAlt className="text-lg" />
                  <p className="ml-2">Change Phase</p>
                </a>
              </li>
            </Link>
            <Link to="/logout">
              <li className="w-full">
                <a className="flex items-center p-4 hover:bg-green-500 hover:text-white">
                  <FaSignOutAlt className="text-lg" />
                  <p className="ml-2">LogOut</p>
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Main Panel */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Navbar */}
        <nav className="bg-transparent p-4 shadow-sm">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold"></h2>
            <button className="text-gray-700">
              <FaBars className="text-lg" />
            </button>
          </div>
        </nav>

        {/* Content */}
        <div className="p-8 mt-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="bg-green-500 text-white text-center py-2 rounded-md mb-4">
              <h4 className="text-lg font-semibold">CHANGE PHASE</h4>
            </div>
            <div className="text-gray-700 mb-4">
              <span id="currentPhaseAdmin">Current Phase: {currentPhase}</span>
            </div>
            <button
              onClick={changeState}
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            >
              Change Phase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Changephase;
