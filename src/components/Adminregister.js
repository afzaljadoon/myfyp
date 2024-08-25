import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaInfoCircle,
  FaUserPlus,
  FaRegRegistered,
  FaExchangeAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const Adminregister = () => {
  const [inputData, setInputData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    gender: "",
    password: "",
    confirm_password: "",
  });
  const [alertMsg, setAlertMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputData.confirm_password !== inputData.password) {
      setAlertMsg("Password & Confirm Password do not match");
      return;
    }

    // Simulate an API call to check email uniqueness and save data
    const isEmailUnique = true; // Replace with actual API call
    if (!isEmailUnique) {
      setAlertMsg(`${inputData.email_address} is already in use`);
    } else {
      setAlertMsg("You are successfully registered");
      // Add logic to save data
    }
  };

  const location = useLocation();  // Get the current route location

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-gray-700 shadow-lg">
      <div className="h-16 flex items-center justify-center bg-gray-800">
          <h1 className="text-2xl font-bold text-white">Sidebar</h1>
        </div>
        <div className="mt-4">
          <ul className="space-y-4">
            <Link to="/candidatedetail">
              <li className={`w-full ${location.pathname === '/candidatedetail' ? 'bg-gray-500 text-gray-700' : ''}`}>
                <a className="block w-full flex items-center p-4 text-gray-300 hover:bg-gray-600 hover:text-gray-500">
                  <FaInfoCircle className="text-lg" />
                  <p className="ml-2">Candidate Details</p>
                </a>
              </li>
            </Link>
            <Link to="/addcandidate">
              <li className={`w-full ${location.pathname === '/addcandidate' ? 'bg-gray-500 text-gray-700' : ''}`}>
                <a className="block w-full flex items-center p-4 text-gray-300 hover:bg-gray-600 hover:text-gray-500">
                  <FaUserPlus className="text-lg" />
                  <p className="ml-2">Add Candidate</p>
                </a>
              </li>
            </Link>
            <Link to="/adminregister">
              <li className={`w-full ${location.pathname === '/adminregister' ? 'bg-gray-500 text-gray-700' : ''}`}>
                <a className="block w-full flex items-center p-4 text-gray-300 hover:bg-gray-600 hover:text-gray-500">
                  <FaRegRegistered className="text-lg" />
                  <p className="ml-2">Register</p>
                </a>
              </li>
            </Link>
            <Link to="/changephase">
              <li className={`w-full ${location.pathname === '/changephase' ? 'bg-gray-500 text-gray-700' : ''}`}>
                <a className="block w-full flex items-center p-4 text-gray-300 hover:bg-gray-600 hover:text-gray-500">
                  <FaExchangeAlt className="text-lg" />
                  <p className="ml-2">Change Phase</p>
                </a>
              </li>
            </Link>
            <Link to="/logout">
              <li className="w-full">
                <a className="block w-full flex items-center p-4 text-gray-300 hover:bg-gray-600 hover:text-gray-500">
                  <FaSignOutAlt className="text-lg" />
                  <p className="ml-2">LogOut</p>
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col mt-48">
       
        <div className="p-4 flex-grow">
          <div className="bg-gray-800 shadow-md rounded-sm p-6 max-w-lg mx-auto">
            <h4 className="text-2xl font-bold text-gray-100 mb-4">Register</h4>
            {alertMsg && (
              <div className="bg-red-100 text-red-700 p-2 rounded-md mb-4">
                {alertMsg}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-gray-100 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={inputData.first_name}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm bg-gray-600 text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-gray-100 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={inputData.last_name}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm bg-gray-600 text-white"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="email_address"
                    className="block text-gray-100 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email_address"
                    name="email_address"
                    value={inputData.email_address}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm bg-gray-600 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block text-gray-100 mb-2">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={inputData.gender}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm bg-gray-600 text-white"
                    required
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-gray-100 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={inputData.password}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm bg-gray-600 text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm_password"
                    className="block text-gray-100 mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    value={inputData.confirm_password}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm bg-gray-600 text-white"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-600 text-white p-3 rounded-md hover:bg-gray-700 transition duration-300"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminregister;
