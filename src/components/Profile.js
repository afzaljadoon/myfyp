import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate instead of useHistory
import axios from 'axios';
import Profile from './Images/Profile.png';

const PersonalInfo = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const token = localStorage.getItem('token');
  //       console.log("Token:", token); // Log the token
  //       if (!token) {
  //         throw new Error("No token found. Please log in.");
  //       }

  //       const response = await axios.get('http://localhost:5000/profile', {
  //         headers: {
  //           Authorization: Bearer ${token},
  //         },
  //       });

  //       setUserData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //       if (error.response) {
  //         setError(Error: ${error.response.data.message});
  //       } else {
  //         setError(error.message);
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  // Function to handle button click
  const handleVoteButtonClick = () => {
    navigate('/votingpanel'); // Redirect to the VotingPanel component
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-5 lg:pt-48">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-900 p-6 md:p-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 xl:w-1/4 flex flex-col items-center md:items-start md:pr-10 mb-10 md:mb-0">
            <img
              src={Profile}
              alt="Profile"
              className="w-40 h-25 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full mb-6"
            />
            <button className="bg-blue-500 text-white py-2 px-4 text-sm rounded-sm hover:bg-blue-600 transition whitespace-nowrap duration-300 font-bold">
              Change profile picture
            </button>
          </div>

          <div className="w-full flex-grow lg:pl-48">
            {loading ? (
              <p>Loading user data...</p>
            ) : error ? (
              <p>Error fetching data: {error}</p>
            ) : userData ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl text-blue-400">Name:</h3>
                  <p className="text-white font-bold text-2xl">{userData.name}</p>
                </div>
                <div>
                  <h3 className="text-xl text-blue-400">Father's Name:</h3>
                  <p className="text-white font-bold text-2xl">{userData.fathername}</p>
                </div>
                <div>
                  <h3 className="text-xl text-blue-400">Date of Birth:</h3>
                  <p className="text-white font-bold text-2xl">{new Date(userData.dob).toLocaleDateString()}</p>
                </div>
                <div>
                  <h3 className="text-xl text-blue-400">Mobile Number:</h3>
                  <p className="font-bold text-2xl">{userData.mobileno}</p>
                </div>
                <div>
                  <h3 className="text-xl text-blue-400">CNIC Number:</h3>
                  <p className="text-white font-bold text-2xl">{userData.cinc}</p>
                </div>
              </div>
            ) : (
              <p>Error fetching data</p>
            )}
          </div>
        </div>

        {/* Attractive Vote Button */}
        <div className="flex justify-center mt-10">
          <Link to="/voting">
          <button
            onClick={handleVoteButtonClick}
            className="bg-gray-800 text-white py-3 px-6 text-lg rounded-sm hover:bg-gray-600 transition duration-300 font-bold shadow-lg transform hover:scale-105"
          >
            Go to Voting Panel
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;