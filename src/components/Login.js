import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import loginp from './Images/loginp.png';
import Footer from './Footer';
import Header from './Header';

const Login = () => {
  // State to manage form inputs and response message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/login', { email, password });

      // Check for a successful login response
      if (res.status === 200) {
        setMessage(res.data.message); // Success message (if any)

        // Store the token in localStorage
        localStorage.setItem('authToken', res.data.token);

        // Redirect to the profile page after successful login
        navigate('/voting'); // Redirecting to the profile page
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-gray-900 text-white flex justify-center items-center min-h-screen py-10 px-5">
        <div className="flex flex-col md:flex-row items-center p-10 rounded-sm shadow-lg">
          <div className="mb-6 md:mb-0 md:mr-10">
            <img src={loginp} alt="Login" className="w-full h-auto max-w-xs md:max-w-sm rounded-sm" />
          </div>
          <div className="w-full max-w-md md:mr-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">Login</h2>

            {/* Display error or success message */}
            {message && (
              <div className={`text-center mb-4 p-2 ${message.includes('Invalid') ? 'text-red-500' : 'text-green-500'}`}>
                {message}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded bg-gray-200 text-black"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
