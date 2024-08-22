import React from "react";
import { FaPen } from "react-icons/fa";
import Profile from "./Images/Profile.png";

const PersonalInfo = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-5 lg:pt-48">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-900 p-6 md:p-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
          {/* Profile Section */}
          <div className="w-full md:w-1/3 xl:w-1/4 flex flex-col items-center md:items-start md:pr-10 mb-10 md:mb-0">
            <img
              src={Profile}
              alt="Profile"
              className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full mb-6"
            />
            <button className="bg-blue-500 text-white py-2 px-4 text-sm rounded-sm hover:bg-blue-600 transition whitespace-nowrap duration-300 font-bold">
              Change profile picture
            </button>
            <button className="mt-4 text-white hover:text-blue-500 font-bold flex items-center mx-auto">
              <FaPen className="mr-2" />
              Edit Profile
            </button>
          </div>

          {/* Information Section */}
          <div className="w-full flex-grow lg:pl-48">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl text-blue-400">Name:</h3>
                <p className="text-white font-bold text-2xl">John Doe</p>
              </div>
              <div>
                <h3 className="text-xl text-blue-400">Father's/Mother's Name:</h3>
                <p className="text-white font-bold text-2xl">Papa John Doe</p>
              </div>
              <div>
                <h3 className="text-xl text-blue-400">Age:</h3>
                <p className="text-white font-bold text-2xl">19</p>
              </div>
              <div>
                <h3 className="text-xl text-blue-400">Mobile Number:</h3>
                <p className="font-bold text-2xl">+91 9191505010</p>
              </div>
              <div>
                <h3 className="text-xl text-blue-400">Aadhar Number:</h3>
                <p className="text-white font-bold text-2xl">6100 4080 9126 0909</p>
              </div>
              <div className="sm:col-span-2">
                <h3 className="text-xl text-blue-400">Address:</h3>
                <p className="text-white font-bold text-2xl">
                  XYZ, Street No. 92, Gurgaon, Uttar Pradesh, 100021
                </p>
              </div>
              <div>
                <h3 className="text-xl text-blue-400">Eligible:</h3>
                <p className="text-white font-bold text-2xl">True</p>
              </div>
              <div>
                <h3 className="text-xl text-blue-400">Verified:</h3>
                <p className="text-white font-bold text-2xl">True</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
