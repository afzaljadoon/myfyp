import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-10 px-5 font-abc">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Contact Information */}
        <div className="flex flex-col items-start mb-6 md:mb-0 w-full md:w-auto ">
          <div className="mb-4 ">
            <div className="font-bold text-xl text-blue-500 ">Contact:</div>
            <div>1800 9090 32</div>
            <div>1800 9090 64</div>
          </div>
          <div className="mb-4">
            <div className="font-bold text-xl text-blue-500 ">Helpline Number:</div>
            <div>9090 1234 46</div>
            <div>9090 1234 47</div>
          </div>
          <div className="mb-4">
            <div className="font-bold text-xl text-blue-500">Email:</div>
            <div>complaint@electionindia.gov.in</div>
            <div>info@electionindia.gov.in</div>
          </div>
        </div>

        {/* Divider for larger screens */}
        <div className="hidden md:block border-l-2 border-blue-500 h-60 mx-6"></div>

        {/* Links Section */}
        <div className="flex flex-col items-start mb-6 md:mb-0 w-full md:w-auto cursor-pointer">
          <div className="font-bold text-xl text-blue-500 underline mb-2">Get In</div>
          <Link to="/registrationform"><div>Register</div></Link>
          <Link to="/login"><div>Login</div></Link>
        </div>

        {/* Divider for larger screens */}
        {/* <div className="hidden md:block border-l-2 border-white h-60 mx-6"></div> */}

        {/* Know More Section */}
        <div className="flex flex-col items-start mb-6 md:mb-0 w-full md:w-auto cursor-pointer">
          <div className="font-bold text-xl mb-3 underline text-blue-500 ">Know more</div>
          <div>Features</div>
          <div>About</div>
          <div>Steps</div>
        </div>

        {/* Divider for larger screens */}
        {/* <div className="hidden md:block border-l-2 border-white h-60 mx-6"></div> */}

        {/* Follow Us Section */}
        <div className="flex flex-col items-start mb-6 md:mb-0 w-full md:w-auto cursor-pointer">
          <div className="font-bold text-xl mb-3 text-blue-500 underline">Follow Us</div>
          <div>Facebook</div>
          <div>Instagram</div>
          <div>Twitter</div>
        </div>

        {/* Divider for larger screens */}
        <div className="hidden md:block border-l-2 border-blue-500 h-60 mx-6"></div>

        {/* Quick Feedback Section */}
        <div className="flex flex-col items-start w-full md:w-auto">
          <div className="font-bold text-xl mb-2">Quick Feedback:</div>
          <input className="bg-gray-200 text-black p-2 mb-4 w-full md:w-auto" type="text" placeholder="Your feedback" />
          <textarea className="bg-gray-200 text-black p-2 mb-3 w-full md:w-auto" rows="4" placeholder="Your comments"></textarea>
          <button className="bg-blue-500 text-white p-2 flex items-center w-full md:w-auto">
            <FaPaperPlane className="w-5 h-5 mr-2" /> 
            Send
          </button>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center items-center mt-10 text-blue-500 space-x-6">
        <FaTwitter className='w-8 h-8 hover:text-blue-400 transition duration-300'/>
        <FaFacebook className='w-8 h-8 hover:text-blue-400 transition duration-300'/>
        <FaInstagram className='w-8 h-8 hover:text-blue-400 transition duration-300'/>
      </div>

      {/* Footer Credit */}
      <div className="text-center mt-6">
        <span>&copy; All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
