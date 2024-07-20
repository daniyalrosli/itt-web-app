// src/components/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="h-screen w-full p-6 bg-white rounded-xl shadow-md flex flex-col items-center justify-center space-y-6">
      <h2 className="text-3xl font-bold text-blue-600 text-center">
        Dashboard
      </h2>
      <p className="text-center text-gray-700">
        The dashboard displays real-time metrics and analytics to monitor the health and performance of athletes.
      </p>
      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Interactive charts and metrics will be displayed here.</p>
      </div>
    </div>
  );
};

export default Dashboard;