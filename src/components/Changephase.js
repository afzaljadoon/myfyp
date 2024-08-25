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
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-white shadow-lg">
        <div className="mt-12">
          <ul className="space-y-4">
            <Link to="/candidatedetail">
            <li className="flex items-center">
              <a href="/candidateDetails" className="flex items-center space-x-2">
                <FaInfoCircle className="text-lg" />
                <p className="text-gray-700">Candidate Details</p>
              </a>
            </li>
            </Link>
            <Link to="/addcandidate">
            <li className="flex items-center">
              <a href="/addCandidate" className="flex items-center space-x-2">
                <FaUserPlus className="text-lg" />
                <p className="text-gray-700">Add Candidate</p>
              </a>
            </li>
            </Link>
            <Link to="/adminregister">
            <li className="flex items-center">
              <a href="/table_view" className="flex items-center space-x-2">
                <FaRegRegistered className="text-lg" />
                <p className="text-gray-700">Register</p>
              </a>
            </li>
            </Link>
            <Link to="/changephase">
            <li className="flex items-center">
              <a href="#" className="flex items-center space-x-2 text-green-500">
                <FaExchangeAlt className="text-lg" />
                <p>Change Phase</p>
              </a>
            </li>
            </Link>
            <Link to="/logout">
            <li className="flex items-center">
              <a href="/logout" className="flex items-center space-x-2">
                <FaSignOutAlt className="text-lg" />
                <p className="text-gray-700">LogOut</p>
              </a>
            </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Main Panel */}
      <div className="flex-1">
        {/* Navbar */}
        <nav className="bg-transparent fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2">
          <div className="text-gray-700">
            <a href="javascript:;" className="text-xl font-semibold"></a>
          </div>
          <button className="text-gray-700">
            <FaBars className="text-lg" />
          </button>
        </nav>

        {/* Content */}
        <div className="p-8 mt-16">
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
