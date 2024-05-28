// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ user }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Job Hack</h1>
        <p className="text-gray-700 mb-8">This is your homepage. Here you can find the latest updates and manage your profile.</p>
        <div className="mb-4">
          <span className="text-gray-600">You are logged in as:</span>
          <span className="font-semibold"> {user?.username} ({user?.role})</span>
        </div>
        <Link to="/admin" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
