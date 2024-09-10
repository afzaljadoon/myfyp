import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInfoCircle, FaUserPlus, FaRegRegistered, FaExchangeAlt, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

const Addcandidate = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    party: '',
    age: '',
    qualification: '',
    icon: ''  // Default icon
  });

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const candidates = JSON.parse(localStorage.getItem('candidates')) || [];

    candidates.push({ ...formData, votes: 0 });

    localStorage.setItem('candidates', JSON.stringify(candidates));

    setFormData({ name: '', party: '', age: '', qualification: '', icon: '' });
    alert("Candidate has been added successfully!");
  };

  const location = useLocation();  // Get the current route location

  // Close the sidebar when clicked outside or on the close button
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Mobile Sidebar Toggle Button */}
      <div className="md:hidden p-4 bg-gray-800 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Add Candidate</h1>
        <FaBars className="text-white text-2xl" onClick={() => setIsSidebarOpen(true)} />
      </div>

      {/* Full-screen Overlay when Sidebar is open (only for small screens) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"  // Only show on small screens
          onClick={closeSidebar}  // Close sidebar when clicking outside of it
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-screen w-64 bg-gray-700 shadow-md z-30 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
  <div className="h-16 flex items-center justify-between bg-gray-800 p-4">
    <h1 className="text-2xl font-bold text-white">Sidebar</h1>
    {/* Close Button */}
    <FaTimes className="text-white text-2xl md:hidden" onClick={closeSidebar} />
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

        <div className="flex justify-center items-center mt-10 md:mt-40">
          <div className="bg-gray-800 p-6 md:p-8 rounded-md shadow-lg w-full max-w-lg md:max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Add Candidate Information</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 mb-6">
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

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 mb-6">
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
