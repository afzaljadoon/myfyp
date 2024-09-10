import React, { useEffect, useState } from 'react';
import * as Icons from 'react-icons/fa'; // Import all Fa icons
import { FaTrashAlt, FaEdit, FaSignOutAlt, FaExchangeAlt, FaRegRegistered, FaUserPlus, FaSave, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Candidatedetail = () => {
  const [candidates, setCandidates] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedCandidate, setEditedCandidate] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const storedCandidates = JSON.parse(localStorage.getItem('candidates')) || [];
    setCandidates(storedCandidates);
  }, []);

  const handleDelete = (index) => {
    const updatedCandidates = candidates.filter((_, i) => i !== index);
    setCandidates(updatedCandidates);
    localStorage.setItem('candidates', JSON.stringify(updatedCandidates));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedCandidate(candidates[index]);
  };

  const handleSave = (index) => {
    const updatedCandidates = candidates.map((candidate, i) =>
      i === index ? editedCandidate : candidate
    );
    setCandidates(updatedCandidates);
    localStorage.setItem('candidates', JSON.stringify(updatedCandidates));
    setEditingIndex(null);
  };

  const handleChange = (e) => {
    setEditedCandidate({
      ...editedCandidate,
      [e.target.name]: e.target.value,
    });
  };

  const location = useLocation();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900">
      {/* Mobile Sidebar Toggle Button */}
      <div className="md:hidden p-4 bg-gray-800 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Candidate Details</h1>
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
                  <Icons.FaInfoCircle className="text-lg" />
                  <p className="ml-2">Candidate Details</p>
                </a>
              </li>
            </Link>
            <Link to="/addcandidate">
              <li className={`w-full ${location.pathname === '/addcandidate' ? 'bg-gray-500 text-gray-700' : ''}`}>
                <a href="/addcandidate" className="flex items-center p-4 text-gray-300 hover:bg-gray-600 hover:text-gray-500">
                  <Icons.FaUserPlus className="text-lg" />
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
          <h2 className="text-2xl font-bold text-white">Candidate Details</h2>
        </nav>

        {/* Responsive Table */}
        <div className="overflow-x-auto mt-10 px-4">
          <table className="table-auto w-full bg-gray-800 text-white rounded-lg">
            <thead>
              <tr className='w-full bg-gray-700'>
                <th className="p-2 text-left w-1/6">Name</th>
                <th className="p-2 text-left w-1/6">Party</th>
                <th className="p-2 text-left w-1/6">Age</th>
                <th className="p-2 text-left w-1/6">Qualification</th>
                <th className="p-2 text-left w-1/6">Icon</th>
                <th className="p-2 text-left w-1/6">Votes</th> {/* New Votes Column */}
                <th className="p-2 text-left w-1/6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate, index) => (
                <tr key={index} className="border-b border-gray-700">
                  {editingIndex === index ? (
                    <>
                      <td className="p-2">
                        <input
                          type="text"
                          name="name"
                          value={editedCandidate.name}
                          onChange={handleChange}
                          className="w-full bg-gray-600 text-white p-2 rounded-sm"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          name="party"
                          value={editedCandidate.party}
                          onChange={handleChange}
                          className="w-full bg-gray-600 text-white p-2 rounded-sm"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          name="age"
                          value={editedCandidate.age}
                          onChange={handleChange}
                          className="w-full bg-gray-600 text-white p-2 rounded-sm"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          name="qualification"
                          value={editedCandidate.qualification}
                          onChange={handleChange}
                          className="w-full bg-gray-600 text-white p-2 rounded-sm"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          name="icon"
                          value={editedCandidate.icon}
                          onChange={handleChange}
                          className="w-full bg-gray-600 text-white p-2 rounded-lg"
                        />
                      </td>
                      <td className="p-2">0</td> {/* Initialize votes to 0 */}
                      <td className="p-6 text-2xl">
                        <FaSave className="cursor-pointer text-green-500" onClick={() => handleSave(index)} />
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="p-2">{candidate.name}</td>
                      <td className="p-2">{candidate.party}</td>
                      <td className="p-2">{candidate.age}</td>
                      <td className="p-2">{candidate.qualification}</td>
                      <td className="p-2 text-2xl"> {/* Adjusted Icon Size */}
                        {React.createElement(Icons[candidate.icon] || FaUserPlus)}
                      </td>
                      <td className="p-2">0</td> {/* Display votes as 0 for now */}
                      <td className="p-5 flex space-x-4 text-xl">
                        <FaEdit className="cursor-pointer text-blue-500" onClick={() => handleEdit(index)} />
                        <FaTrashAlt className="cursor-pointer text-red-500 ml-2" onClick={() => handleDelete(index)} />
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Candidatedetail;
