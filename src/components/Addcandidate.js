import React, { useState } from 'react';
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
    // Add your submission logic here
    alert("Candidate has been added Successfully!");
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-white h-screen p-5">
        <ul className="space-y-4 mt-12">
          <li>
            <a href="/candidateDetails" className="flex items-center text-gray-600 hover:text-green-500">
              <FaInfoCircle className="text-lg" />
              <p className="ml-2">Candidate Details</p>
            </a>
          </li>
          <li className="text-green-500">
            <a href="#" className="flex items-center">
              <FaUserPlus className="text-lg" />
              <p className="ml-2">Add Candidate</p>
            </a>
          </li>
          <li>
            <a href="/table_view" className="flex items-center text-gray-600 hover:text-green-500">
              <FaRegRegistered className="text-lg" />
              <p className="ml-2">Register</p>
            </a>
          </li>
          <li>
            <a href="/changePhase" className="flex items-center text-gray-600 hover:text-green-500">
              <FaExchangeAlt className="text-lg" />
              <p className="ml-2">Change State</p>
            </a>
          </li>
          <li>
            <a href="/logout" className="flex items-center text-gray-600 hover:text-green-500">
              <FaSignOutAlt className="text-lg" />
              <p className="ml-2">LogOut</p>
            </a>
          </li>
        </ul>
      </div>

      <div className="w-3/4 bg-gray-100 min-h-screen">
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
