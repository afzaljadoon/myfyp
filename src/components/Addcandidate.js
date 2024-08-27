import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInfoCircle, FaUserPlus, FaRegRegistered, FaExchangeAlt, FaSignOutAlt } from 'react-icons/fa';

const Addcandidate = () => {
  const [formData, setFormData] = useState({
    name: '',
    party: '',
    age: '',
    qualification: '',
    icon: ''  // Default icon
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Candidate Added:', formData);
    setFormData({ name: '', party: '', age: '', qualification: '', icon: '' });
    alert("Candidate has been added Successfully!");
  };

  const location = useLocation();  // Get the current route location

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
              <li className="w-full text-gray-700">
                <a href="/logout" className="flex items-center p-4 text-gray-300 hover:bg-gray-600 hover:text-gray-500">
                  <FaSignOutAlt className="text-lg" />
                  <p className="ml-2">LogOut</p>
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-900">
        <nav className="bg-transparent p-4 shadow-sm">
          <h2 className="text-2xl font-bold text-white">Add Candidate</h2>
        </nav>

        <div className="flex justify-center items-center mt-40">
          <div className="bg-gray-800 p-8 rounded-md shadow-lg w-full max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Add Candidate Information</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-100 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm bg-gray-600 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="party" className="block text-gray-100 mb-2">Party</label>
                  <input
                    type="text"
                    id="party"
                    value={formData.party}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm bg-gray-600 text-white"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="age" className="block text-gray-100 mb-2">Age</label>
                  <input
                    type="text"
                    id="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm bg-gray-600 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="qualification" className="block text-gray-100 mb-2">Qualification</label>
                  <input
                    type="text"
                    id="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm bg-gray-600 text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="icon" className="block text-gray-100 mb-2">Icon</label>
                <input
                  type="text"
                  id="icon"
                  value={formData.icon}
                  onChange={handleChange}
                  className="w-full p-2 rounded-sm bg-gray-600 text-white"
                  placeholder="Enter icon name (e.g., FaUserPlus)"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-600 text-white p-3 rounded-md hover:bg-gray-700 transition duration-300 mt-6"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcandidate;
