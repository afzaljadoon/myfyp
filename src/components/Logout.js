import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        // Call the backend API to destroy the session
        const response = await fetch('/logout', {
          method: 'GET',
          credentials: 'include', // This is necessary to include the session cookie
        });

        if (response.ok) {
          // Redirect to home page after successful logout
          navigate('/');
        } else {
          console.error('Failed to log out');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    logout();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-xl font-semibold text-gray-700">Logging out...</div>
    </div>
  );
};

export default Logout;

 
