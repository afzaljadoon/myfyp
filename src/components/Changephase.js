import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInfoCircle, FaUserPlus, FaRegRegistered, FaExchangeAlt, FaSignOutAlt, FaBars } from 'react-icons/fa';

const Changephase = () => {
  const [currentPhase, setCurrentPhase] = useState("Voting");
  const location = useLocation();  // Get the current route location

  const changeState = () => {
    const newPhase = currentPhase === "Voting" ? "Closed" : "Voting";
    setCurrentPhase(newPhase);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-700 shadow-md">
      <div className="h-16 flex items-center justify-center bg-gray-800">
          <h1 className="text-2xl font-bold text-white">Sidebar</h1>
        </div>
        <div className="mt-4">
          <ul className="space-y-2">
            <Link to="/candidatedetail">
              <li className={`w-full ${location.pathname === '/candidatedetail' ? 'bg-gray-500 text-gray-700' : ''}`}>
                <a className="flex items-center p-4 text-gray-300 hover:bg-gray-600 hover:text-gray-500">
                  <FaInfoCircle className="text-lg" />
                  <p className="ml-2">Candidate Details</p>
                </a>
              </li>
            </Link>
            <Link to="/addcandidate">
              <li className={`w-full ${location.pathname === '/addcandidate' ? 'bg-gray-500 text-gray-700' : ''}`}>
                <a className="flex items-center p-4 text-gray-300 hover:bg-gray-600 hover:text-gray-500">
                  <FaUserPlus className="text-lg" />
                  <p className="ml-2">Add Candidate</p>
                </a>
              </li>
            </Link>
            <Link to="/adminregister">
              <li className={`w-full ${location.pathname === '/adminregister' ? 'bg-gray-500 text-gray-700' : ''}`}>
                <a className="flex items-center p-4 text-gray-300 hover:bg-gray-600 hover:text-gray-500">
                  <FaRegRegistered className="text-lg" />
                  <p className="ml-2">Register</p>
                </a>
              </li>
            </Link>
            <Link to="/changephase">
              <li className={`w-full ${location.pathname === '/changephase' ? 'bg-gray-500 text-gray-700' : ''}`}>
                <a className="flex items-center p-4 text-gray-300 hover:bg-gray-600 hover:text-gray-500">
                  <FaExchangeAlt className="text-lg" />
                  <p className="ml-2">Change Phase</p>
                </a>
              </li>
            </Link>
            <Link to="/logout">
              <li className={`w-full ${location.pathname === '/logout' ? 'bg-gray-500 text-gray-700' : ''}`}>
                <a className="flex items-center p-4 text-gray-300 hover:bg-gray-600 hover:text-gray-500">
                  <FaSignOutAlt className="text-lg" />
                  <p className="ml-2">LogOut</p>
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Main Panel */}
      <div className="flex-1 flex flex-col bg-gray-900">

        {/* Content */}
        <div className="p-8 mt-4">
          <div className="bg-gray-800 shadow-md rounded-sm p-4">
            <div className="bg-gray-700 text-white text-center py-2 rounded-md mb-4">
              <h4 className="text-lg font-semibold ">CHANGE PHASE</h4>
            </div>
            <div className="text-gray-200 mb-4">
              <span id="currentPhaseAdmin">Current Phase: {currentPhase}</span>
            </div>
            <button
              onClick={changeState}
              className="bg-gray-700 text-white py-2 px-4 rounded-sm hover:bg-gray-600"
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
