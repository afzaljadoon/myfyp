import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !password) {
      setError("All fields are required");
      return false;
    }
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    // Password length validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulating authentication
      if (email === "jadoonafzal027@gmail.com" && password === "afzal201133") {
        navigate("/addcandidate");
      } else {
        setError("Invalid email or password");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Admin Login</h2>
        {error && (
          <div className="mb-4 p-2 text-sm text-red-600 border border-red-600 rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded px-3">
              <FaUser className="text-gray-400" />
              <input
                type="email"
                id="email"
                className="w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded px-3">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                id="password"
                className="w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
