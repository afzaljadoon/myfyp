import React from 'react';

const Candidatedetail = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-white">
        <div className="h-16 flex items-center justify-center bg-green-500">
          <h1 className="text-2xl font-bold text-white">Best Actor Contest</h1>
        </div>
        <div className="flex flex-col items-start mt-4">
          <ul className="space-y-2">
            <li className="w-full">
              <a href="#" className="flex items-center p-4 hover:bg-green-500 hover:text-white">
                <span className="material-icons">info</span>
                <p className="ml-2">Candidate Details</p>
              </a>
            </li>
            <li className="w-full">
              <a href="/addCandidate" className="flex items-center p-4 hover:bg-green-500 hover:text-white">
                <span className="material-icons">person_add</span>
                <p className="ml-2">Add Candidate</p>
              </a>
            </li>
            <li className="w-full">
              <a href="/table_view" className="flex items-center p-4 hover:bg-green-500 hover:text-white">
                <span className="material-icons">how_to_reg</span>
                <p className="ml-2">Register</p>
              </a>
            </li>
            <li className="w-full">
              <a href="#" className="flex items-center p-4 hover:bg-green-500 hover:text-white">
                <span className="material-icons">published_with_changes</span>
                <p className="ml-2">Change Phase</p>
              </a>
            </li>
            <li className="w-full">
              <a href="/logout" className="flex items-center p-4 hover:bg-green-500 hover:text-white">
                <span className="material-icons">logout</span>
                <p className="ml-2">LogOut</p>
              </a>
            </li>
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
              <span className="material-icons">menu</span>
            </button>
          </div>
        </nav>

        {/* Content */}
        <div className="p-4 flex-grow">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-2xl font-bold text-green-600 mb-4">Candidate Details</h4>
            <div>
              <table className="min-w-full bg-white">
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
