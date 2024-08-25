import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="mt-12">
          <ul className="space-y-4">
            <Link to="/candidatedetail">
              <li className="w-full">
                <a className="block w-full flex items-center p-4 hover:bg-green-500 hover:text-white">
                  <FaInfoCircle className="text-lg" />
                  <p className="ml-2">Candidate Details</p>
                </a>
              </li>
            </Link>
            <Link to="/addcandidate">
              <li className="w-full">
                <a className="block w-full flex items-center p-4 hover:bg-green-500 hover:text-white">
                  <FaUserPlus className="text-lg" />
                  <p className="ml-2">Add Candidate</p>
                </a>
              </li>
            </Link>
            <Link to="/adminregister">
              <li className="w-full">
                <a className="block w-full flex items-center p-4 hover:bg-green-500 hover:text-white">
                  <FaRegRegistered className="text-lg" />
                  <p className="ml-2">Register</p>
                </a>
              </li>
            </Link>
            <Link to="/changephase">
              <li className="w-full">
                <a className="block w-full flex items-center p-4 hover:bg-green-500 hover:text-white">
                  <FaExchangeAlt className="text-lg" />
                  <p className="ml-2">Change Phase</p>
                </a>
              </li>
            </Link>
            <Link to="/logout">
              <li className="w-full">
                <a className="block w-full flex items-center p-4 hover:bg-green-500 hover:text-white">
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
        <nav className="bg-transparent p-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold"></div>
          </div>
        </nav>

        <div className="p-4 flex-grow">
          <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
            <h4 className="text-2xl font-bold text-green-600 mb-4">Register</h4>
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
                    className="block text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={inputData.first_name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded bg-gray-50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={inputData.last_name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded bg-gray-50"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="email_address"
                    className="block text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email_address"
                    name="email_address"
                    value={inputData.email_address}
                    onChange={handleChange}
                    className="w-full p-2 border rounded bg-gray-50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block text-gray-700 mb-2">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={inputData.gender}
                    onChange={handleChange}
                    className="w-full p-2 border rounded bg-gray-50"
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
                    className="block text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={inputData.password}
                    onChange={handleChange}
                    className="w-full p-2 border rounded bg-gray-50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm_password"
                    className="block text-gray-700 mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    value={inputData.confirm_password}
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
