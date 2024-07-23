import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  // Example data based on the screenshot
  const forceData = [
    { id: '-O2KTOMxuSwFh6vCOArM', value: 0.02 },
    { id: '-O2KTOjYT31UwHE_qggj', value: 0.01 },
    { id: '-O2KTP69sI0yDY6iJrAH', value: 0.01 },
    { id: '-O2KTU6iTGvAuQ6YtlUj', value: 0.39 },
    { id: '-O2KTWRMfImop2QUmMPK', value: 0.1 },
  ];

  const temperatureData = [
    { id: '-O2KT0lutveWlq3oq2N0', value: 31.85 },
    { id: '-O2KTOfYZpHhFHs8DuPm', value: 32.41 },
    { id: '-O2KTP2BflOve586NcKx', value: 32.32 },
    { id: '-O2KTU2j_OGWmsp8vt4k', value: 31.75 },
    { id: '-O2KTWNLgewyBdjGVzZC', value: 31.75 },
  ];

  const forceChartData = {
    labels: forceData.map(data => data.id),
    datasets: [
      {
        label: 'Force Data',
        data: forceData.map(data => data.value),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const temperatureChartData = {
    labels: temperatureData.map(data => data.id),
    datasets: [
      {
        label: 'Temperature Data',
        data: temperatureData.map(data => data.value),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4 mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold"> IoT Group Project Dashboard</h1>
          <h2 className="text-xl">Athlete Health Monitoring</h2>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#force-data" className="text-blue-600 hover:underline">Force Data</a></li>
            <li><a href="#temperature-data" className="text-blue-600 hover:underline">Temperature Data</a></li>
            <li><a href="#charts" className="text-blue-600 hover:underline">Charts</a></li>
          </ul>
        </nav>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {/* Summary Cards */}
        <div className="bg-white shadow-md p-4 rounded-md text-center">
          <h2 className="text-lg font-semibold text-blue-600">Total Force Data Entries</h2>
          <p className="text-2xl font-bold">{forceData.length}</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-md text-center">
          <h2 className="text-lg font-semibold text-blue-600">Total Temperature Data Entries</h2>
          <p className="text-2xl font-bold">{temperatureData.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mt-6">
        {/* Force Data Section */}
        <div className="bg-white shadow-md p-4 rounded-md" id="force-data">
          <h2 className="text-lg font-semibold mb-2 text-blue-600">Force Data</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Value</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {forceData.map((data) => (
                <tr key={data.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{data.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{data.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Temperature Data Section */}
        <div className="bg-white shadow-md p-4 rounded-md" id="temperature-data">
          <h2 className="text-lg font-semibold mb-2 text-blue-600">Temperature Data</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Value</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {temperatureData.map((data) => (
                <tr key={data.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{data.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{data.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts Section */}
      <div className="px-4 mt-6" id="charts">
        <div className="bg-white shadow-md p-4 rounded-md mb-6">
          <h2 className="text-lg font-semibold mb-2 text-blue-600">Force Data Chart</h2>
          <Line data={forceChartData} />
        </div>
        <div className="bg-white shadow-md p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-2 text-blue-600">Temperature Data Chart</h2>
          <Line data={temperatureChartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;