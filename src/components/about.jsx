// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="h-screen w-full p-6 bg-white rounded-xl shadow-md flex flex-col items-center justify-center space-y-6">
      <h2 className="text-3xl font-bold text-blue-600 text-center">
        About
      </h2>
      <p className="text-center text-gray-700">
        This project is a smart real-time IoT-based system for monitoring the health of athletes. It provides real-time data and analytics to ensure optimal performance and health. By integrating with advanced wearable technology, our system captures critical health metrics and delivers actionable insights to athletes and coaches.
      </p>
      <p className="text-center text-gray-700">
        Our platform offers:
      </p>
      <ul className="list-disc list-inside text-center text-gray-700 space-y-2">
        <li>Real-time monitoring of vital signs such as heart rate, temperature, and activity levels.</li>
        <li>Detailed analytics and trends to track performance and health over time.</li>
        <li>Customizable alerts for abnormal readings or significant changes in health metrics.</li>
        <li>Integration with existing training programs to enhance overall performance and safety.</li>
        <li>User-friendly interface for athletes, coaches, and medical professionals to access and interpret data.</li>
      </ul>
      <p className="text-center text-gray-700">
        Our goal is to empower athletes with the tools they need to stay at the top of their game and make informed decisions about their health and performance.
      </p>
    </div>
  );
};

export default About;