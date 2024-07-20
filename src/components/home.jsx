// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen w-full p-6 bg-white rounded-xl shadow-md flex flex-col items-center justify-center space-y-6">
      <h2 className="text-3xl font-bold text-blue-600 text-center">
        Welcome to our IoT Group Project: Athlete Health Monitoring
      </h2>
      <p className="text-center text-gray-700">
        This platform provides real-time insights and analytics to help monitor and improve the health and performance of athletes.
      </p>
      <Link
        to="/dashboard"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Home;