import React from 'react';
import { Link } from 'react-router-dom';
import loginp from './Images/loginp.png';
import Footer from './Footer';
import Header from './Header';

const Login = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-900 text-white flex justify-center items-center min-h-screen py-10 px-5">
        <div className="flex flex-col md:flex-row items-center p-10 rounded-sm shadow-lg md:mr-80">
          <div className="mb-6 md:mb-0 md:mr-72">
            <img src={loginp} alt="Login" className="w-90 h-90 rounded-sm" />
          </div>
          <div className="w-full max-w-md md:mr-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">Login</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded bg-gray-200 text-black"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded bg-gray-200 text-black"
                  placeholder="Password"
                />
              </div>
              <div className="text-sm text-gray-400 text-center md:text-left">
                <Link to="/registrationform">
                  <a href="#register">Not a user? <span className="text-blue-600 ml-1">Register now</span></a>
                </Link>
              </div>
              <div className="flex justify-center md:justify-start">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-6 rounded mt-4 w-full md:w-auto hover:bg-blue-600 transition duration-300"
                >
                  LOGIN
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

export default Login;
