import React from 'react';
import Registration from './Images/Registeration.png';
import Header from './Header';
import Footer from './Footer';

const RegistrationForm = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-900 text-white flex justify-center items-center min-h-screen py-6 px-4">
        <div className="flex flex-col md:flex-row items-center bg-gray-900 p-6 md:p-10 rounded-lg shadow-lg w-full max-w-screen-lg">
          {/* Image Section */}
          <div className="mb-6 md:mb-0 md:mr-20 pr-4 flex justify-center w-full md:w-auto ">
            <img 
              src={Registration} 
              alt='Ordinary person' 
              className='w-64 h-64 md:w-32 md:h-32 lg:w-80 lg:h-80 object-contain mt-6' 
            />
          </div>

          {/* Form Section */}
          <div className="w-full max-w-md mt-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center md:text-left">
              Registration Form
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400"
                  placeholder="Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Date Of Birth</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Father's/Mother's Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400"
                  placeholder="Father's/Mother's Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mobile No.</label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400"
                  placeholder="Mobile No."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400"
                  placeholder="Password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Re-enter Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400"
                  placeholder="Re-enter Password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">CNIC Number</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400"
                  placeholder="CNIC Number"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-6 rounded mt-4 hover:bg-blue-600 transition duration-300"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationForm;
