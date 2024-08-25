import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInfoCircle, FaUserPlus, FaRegRegistered, FaExchangeAlt, FaSignOutAlt } from 'react-icons/fa';

const Addcandidate = () => {
  const [formData, setFormData] = useState({
    name: '',
    party: '',
    age: '',
    qualification: ''
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
    alert("Candidate has been added Successfully!");
  };

  const location = useLocation();  // Get the current route location

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="h-16 flex items-center justify-center bg-green-500">
          <h1 className="text-2xl font-bold text-white">Sidebar</h1>
        </div>
        <div className="mt-4">
          <ul className="space-y-2">
            <Link to="/candidatedetail">
              <li className={`w-full ${location.pathname === '/candidatedetail' ? 'bg-green-500 text-white' : ''}`}>
                <a className="flex items-center p-4 hover:bg-green-500 hover:text-white">
                  <FaInfoCircle className="text-lg" />
                  <p className="ml-2">Candidate Details</p>
                </a>
              </li>
            </Link>
            <Link to="/addcandidate">
              <li className={`w-full ${location.pathname === '/addcandidate' ? 'bg-green-500 text-white' : ''}`}>
                <a className="flex items-center p-4 hover:bg-green-500 hover:text-white">
                  <FaUserPlus className="text-lg" />
                  <p className="ml-2">Add Candidate</p>
                </a>
              </li>
            </Link>
            <Link to="/adminregister">
              <li className={`w-full ${location.pathname === '/adminregister' ? 'bg-green-500 text-white' : ''}`}>
                <a className="flex items-center p-4 hover:bg-green-500 hover:text-white">
                  <FaRegRegistered className="text-lg" />
                  <p className="ml-2">Register</p>
                </a>
              </li>
            </Link>
            <Link to="/changephase">
              <li className={`w-full ${location.pathname === '/changephase' ? 'bg-green-500 text-white' : ''}`}>
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        <nav className="bg-transparent p-4 shadow-sm">
          <h2 className="text-2xl font-bold">Add Candidate</h2>
        </nav>

        <div className="flex justify-center items-center mt-10">
          <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-2xl">
            <h3 className="text-2xl font-bold text-green-600 mb-6">Add Candidate Information</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded bg-gray-50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="party" className="block text-gray-700 mb-2">Party</label>
                  <input
                    type="text"
                    id="party"
                    value={formData.party}
                    onChange={handleChange}
                    className="w-full p-2 border rounded bg-gray-50"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="age" className="block text-gray-700 mb-2">Age</label>
                  <input
                    type="text"
                    id="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full p-2 border rounded bg-gray-50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="qualification" className="block text-gray-700 mb-2">Qualification</label>
                  <input
                    type="text"
                    id="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    className="w-full p-2 border rounded bg-gray-50"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition duration-300"
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
