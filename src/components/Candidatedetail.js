import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInfoCircle, FaUserPlus, FaRegRegistered, FaExchangeAlt, FaSignOutAlt, FaBars } from 'react-icons/fa';

const Candidatedetail = () => {
    const location = useLocation();  // Get the current route location
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900">
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
                  <FaUserPlus className="text-lg " />
                  <p className="ml-2 ">Add Candidate</p>
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
              <li className="w-full">
                <a className="flex items-center p-4 text-gray-300 hover:bg-gray-600 hover:text-gray-500">
                  <FaSignOutAlt className="text-lg" />
                  <p className="ml-2">LogOut</p>
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="bg-transparent p-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold"></div>
            <button className="md:hidden p-2 focus:outline-none">
              <FaBars className="text-lg" />
            </button>
          </div>
        </nav>

        {/* Content */}
        <div className="p-4 flex-grow ">
          <div className="bg-gray-800 shadow-md rounded-sm p-6">
            <h4 className="text-2xl font-bold text-gray-100 mb-4">Candidate Details</h4>
            <div>
              <table className="min-w-full bg-gray-800 text-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">#</th>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Age</th>
                    <th className="py-2 px-4 border-b">Party</th>
                    <th className="py-2 px-4 border-b">Qualification</th>
                    <th className="py-2 px-4 border-b">Votes</th>
                  </tr>
                </thead>
                <tbody id="contestantsResultsAdmin">
                  {/* Dynamically rendered rows go here */}
                </tbody>
              </table>
              <p id="accountAddress" className="text-center mt-4"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidatedetail;
