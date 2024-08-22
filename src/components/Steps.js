import React from 'react';
import Register from './Images/Register.png';
import Signin from './Images/Signin.svg';
import Vector from './Images/Vector.svg';
import Key from './Images/Key.svg';
import Vote from './Images/Vote.svg';

const Steps = () => {
  return (
    <div className="max-w-4xl mx-auto px-16 py-16 min-h-screen mt-4 md:mt-32">
      <h2 className="text-3xl md:text-7xl font-bold mb-4 text-center md:text-left md:whitespace-nowrap">Follow these easy steps</h2>
      <hr className="border-blue-500 mb-8" />
      <div className="flex flex-col space-y-8">
        <div className="flex items-center space-x-4">
          <img src={Register} alt="Register icon" className="w-12 h-12 md:w-16 md:h-16" />
          <p className="text-lg md:text-xl font-bold">Register yourself by filling the required informations</p>
        </div>
        <div className="flex items-center space-x-4">
          <img src={Signin} alt="Sign-in icon" className="w-12 h-12 md:w-16 md:h-16" />
          <p className="text-lg md:text-xl font-bold">Signin as user</p>
        </div>
        <div className="flex items-center space-x-4">
          <img src={Vector} alt="Dashboard icon" className="w-12 h-12 md:w-16 md:h-16" />
          <p className="text-lg md:text-xl font-bold">Go to vote option on dashboard</p>
        </div>
        <div className="flex items-center space-x-4">
          <img src={Key} alt="Security key icon" className="w-12 h-12 md:w-16 md:h-16" />
          <p className="text-lg md:text-xl font-bold">Give security key</p>
        </div>
        <div className="flex items-center space-x-4">
          <img src={Vote} alt="Vote icon" className="w-12 h-12 md:w-16 md:h-16" />
          <p className="text-lg md:text-xl font-bold">Vote your candidate and submit</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
