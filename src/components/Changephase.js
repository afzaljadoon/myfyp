import React from "react";

const Changephase = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-white shadow-lg">
        <div className="mt-12">
          <ul className="space-y-4">
            <li className="flex items-center">
              <a href="/candidateDetails" className="flex items-center space-x-2">
                <i className="material-icons">info</i>
                <p className="text-gray-700">Candidate Details</p>
              </a>
            </li>
            <li className="flex items-center">
              <a href="/addCandidate" className="flex items-center space-x-2">
                <i className="material-icons">person_add</i>
                <p className="text-gray-700">Add Candidate</p>
              </a>
            </li>
            <li className="flex items-center">
              <a href="/table_view" className="flex items-center space-x-2">
                <i className="material-icons">how_to_reg</i>
                <p className="text-gray-700">Register</p>
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="flex items-center space-x-2 text-green-500">
                <i className="material-icons">published_with_changes</i>
                <p>Change Phase</p>
              </a>
            </li>
            <li className="flex items-center">
              <a href="/logout" className="flex items-center space-x-2">
                <i className="material-icons">logout</i>
                <p className="text-gray-700">LogOut</p>
              </a>
            </li>
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
            <span className="material-icons">menu</span>
          </button>
        </nav>

        {/* Content */}
        <div className="p-8 mt-16">
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="bg-green-500 text-white text-center py-2 rounded-md mb-4">
              <h4 className="text-lg font-semibold">CHANGE PHASE</h4>
            </div>
            <div className="text-gray-700 mb-4">
              <span id="currentPhaseAdmin">Current Phase: Voting</span>
            </div>
            <button
              onClick={() => App.changeState()}
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
