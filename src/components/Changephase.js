import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInfoCircle, FaUserPlus, FaRegRegistered, FaExchangeAlt, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

const Changephase = () => {
  const [currentPhase, setCurrentPhase] = useState("Closed");
  // eslint-disable-next-line no-unused-vars
  const [votingTime, setVotingTime] = useState(0); // Time limit in minutes
  const [sidebarOpen, setSidebarOpen] = useState(false); // Manage sidebar for small screens
  const location = useLocation();

  useEffect(() => {
    // Retrieve the phase and voting time from localStorage when the component mounts
    const savedPhase = localStorage.getItem('votingPhase') || "Closed";
    const savedVotingTime = localStorage.getItem('votingEndTime') || null;

    setCurrentPhase(savedPhase);
    if (savedVotingTime) {
      setVotingTime(savedVotingTime);
    }
  }, []);

  const changeState = () => {
    const newPhase = currentPhase === "Voting" ? "Closed" : "Voting";
    setCurrentPhase(newPhase);

    if (newPhase === "Voting") {
      const timeLimit = prompt("Set voting duration in minutes:", "30"); // Admin sets time limit (default 30 minutes)
      if (timeLimit) {
        const endTime = new Date().getTime() + timeLimit * 60000; // Set the end time in milliseconds
        localStorage.setItem('votingEndTime', endTime); // Save the end time
      }
    } else {
      // Clear the voting end time when the phase is Closed
      localStorage.removeItem('votingEndTime');
    }

    // Save the phase in localStorage
    localStorage.setItem('votingPhase', newPhase);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900">
        {/* Mobile Sidebar Toggle Button */}
        <div className="md:hidden p-4 bg-gray-800 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Change Phase</h1>
        <FaBars className="text-white text-2xl" onClick={() => setSidebarOpen(true)} />
      </div>

      {/* Full-screen Overlay when Sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-screen w-64 bg-gray-700 shadow-md z-30 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
        <div className="h-16 flex items-center justify-between bg-gray-800 p-4">
          <h1 className="text-2xl font-bold text-white">Sidebar</h1>
          <FaTimes className="text-white text-2xl md:hidden" onClick={() => setSidebarOpen(false)} />
        </div>
        <div className="mt-4">
          <ul className="space-y-2">
            <Link to="/candidatedetail">
              <li className={`w-full ${location.pathname === '/candidatedetail' ? 'bg-gray-500 text-gray-700' : ''}`}>
                <a href="/candidatedetail" className="flex items-center p-4 text-gray-300 hover:bg-gray-600 hover:text-gray-500">
                  <FaInfoCircle className="text-lg" />
                  <p className="ml-2">Candidate Details</p>
                </a>
              </li>
            </Link>
            <Link to="/addcandidate">
              <li className={`w-full ${location.pathname === '/addcandidate' ? 'bg-gray-500 text-gray-700' : ''}`}>
                <a href="/addcandidate" className="flex items-center p-4 text-gray-300 hover:bg-gray-600 hover:text-gray-500">
                  <FaUserPlus className="text-lg" />
                  <p className="ml-2">Add Candidate</p>
                </a>
              </li>
            </Link>
            <Link to="/adminregister">
              <li className={`w-full ${location.pathname === '/adminregister' ? 'bg-gray-500 text-gray-700' : ''}`}>
                <a href="/adminregister" className="flex items-center p-4 text-gray-300 hover:bg-gray-600 hover:text-gray-500">
                  <FaRegRegistered className="text-lg" />
                  <p className="ml-2">Register</p>
                </a>
              </li>
            </Link>
            <Link to="/changephase">
              <li className={`w-full ${location.pathname === '/changephase' ? 'bg-gray-500 text-gray-700' : ''}`}>
                <a href="/changephase" className="flex items-center p-4 text-gray-300 hover:bg-gray-600 hover:text-gray-500">
                  <FaExchangeAlt className="text-lg" />
                  <p className="ml-2">Change Phase</p>
                </a>
              </li>
            </Link>
            <Link to="/logout">
              <li className={`w-full ${location.pathname === '/logout' ? 'bg-gray-500 text-gray-700' : ''}`}>
                <a href="/logout" className="flex items-center p-4 text-gray-300 hover:bg-gray-600 hover:text-gray-500">
                  <FaSignOutAlt className="text-lg" />
                  <p className="ml-2">LogOut</p>
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-gray-900">
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
