// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-blue-100 via-white to-blue-100 flex items-center justify-center">
      <div className="max-w-2xl w-full p-8 bg-white rounded-xl shadow-lg flex flex-col items-center space-y-6">
        <h2 className="text-4xl font-extrabold text-blue-800 text-center">
          Welcome to our IoT Group Project
          <span className="block text-blue-600">Athlete Health Monitoring</span>
        </h2>
        <p className="text-center text-gray-600 text-lg leading-relaxed">
          This platform provides real-time insights and analytics to help monitor and improve the health and performance of athletes. 
          <span className="block mt-4 text-gray-500">
            Explore the dashboard to get started!
          </span>
        </p>
        <Link
          to="/dashboard"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;