// src/components/Data.jsx
import React from 'react';

const Data = () => {
  const dummyData = [
    { id: 1, metric: 'Heart Rate', value: '80 bpm' },
    { id: 2, metric: 'Temperature', value: '98.6°F' },
  ];

  return (
    <div className="h-screen w-full p-6 bg-white rounded-xl shadow-md flex flex-col items-center justify-center space-y-6">
      <h2 className="text-3xl font-bold text-blue-600 text-center">
        Data
      </h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="border-b p-3 text-left text-gray-600">Metric</th>
            <th className="border-b p-3 text-left text-gray-600">Value</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((data) => (
            <tr key={data.id}>
              <td className="border-b p-3 text-gray-700">{data.metric}</td>
              <td className="border-b p-3 text-gray-700">{data.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Data;