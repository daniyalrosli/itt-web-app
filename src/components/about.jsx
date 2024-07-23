import React from 'react';
import { FaHeartbeat, FaChartLine, FaBell, FaSyncAlt, FaUserFriends } from 'react-icons/fa';

const About = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full p-8 bg-white rounded-3xl shadow-2xl flex flex-col items-center space-y-6">
        <h2 className="text-4xl font-extrabold text-blue-800 text-center mb-4">
          About Us
        </h2>
        <p className="text-center text-gray-700 text-lg leading-relaxed">
          This project is a smart real-time IoT-based system for monitoring the health of athletes. It provides real-time data and analytics to ensure optimal performance and health. By integrating with advanced wearable technology, our system captures critical health metrics and delivers actionable insights to athletes and coaches.
        </p>
        <p className="text-center text-gray-700 text-lg leading-relaxed">
          Our platform offers:
        </p>
        <ul className="list-none text-gray-700 text-lg leading-relaxed space-y-3">
          <li className="flex items-center space-x-3">
            <FaHeartbeat className="text-blue-800" />
            <span>Real-time monitoring of vital signs such as heart rate, temperature, and activity levels.</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaChartLine className="text-blue-800" />
            <span>Detailed analytics and trends to track performance and health over time.</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaBell className="text-blue-800" />
            <span>Customizable alerts for abnormal readings or significant changes in health metrics.</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaSyncAlt className="text-blue-800" />
            <span>Integration with existing training programs to enhance overall performance and safety.</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaUserFriends className="text-blue-800" />
            <span>User-friendly interface for athletes, coaches, and medical professionals to access and interpret data.</span>
          </li>
        </ul>
        <p className="text-center text-gray-700 text-lg leading-relaxed">
          Our goal is to empower athletes with the tools they need to stay at the top of their game and make informed decisions about their health and performance.
        </p>
      </div>
    </div>
  );
};

export default About;