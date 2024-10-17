import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 fixed w-full z-50 shadow-md font-abc">
      <nav className="container mx-auto px-4 py-4 flex justify-end items-center max-w-screen-xl">
        <div className="hidden md:flex items-center space-x-6">
        <Link to ="/" className="text-white hover:text-blue-300">HOME</Link>
          <Link to="/proelection" className="text-white hover:text-blue-300">PROFILE</Link>
          <Link to="/announcement" className="text-white hover:text-blue-300">ANNOUNCEMENT</Link>
          <Link to="/contact" className="text-white hover:text-blue-300">CONTACT US</Link>
          <Link to="/adminlogin">
            <button className="bg-red-500 text-white px-4 py-2 rounded-sm text-sm hover:bg-red-600">Admin Login</button>
          </Link>
        </div>
        <div className="md:hidden flex justify-end w-full">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-black text-white w-full">
          <ul className="space-y-4 px-4 py-4">
           <li>
            <Link to="/" className="block text-white hover:text-blue-300">HOME</Link>
           </li>
            <li>
              <Link to="/proelection" className="block text-white hover:text-blue-300">PROFILE</Link>
            </li>
            <li>
              <Link to="/announcement" className="block text-white hover:text-blue-300">ANNOUNCEMENT</Link>
            </li>
            <li>
              <Link to="/contact" className="block text-white hover:text-blue-300">CONTACT US</Link>
            </li>
            <li>
              <Link to="/adminlogin">
                <button className="w-full bg-red-500 text-white px-4 py-2 mt-2 rounded-sm text-sm hover:bg-red-700">ADMIN LOGIN</button>
              </Link>
              
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

