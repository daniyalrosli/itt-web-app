import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'; // Import a chart library for visualizations
import 'chart.js/auto'; // Auto import required Chart.js components

const Reports = () => {
  // Dummy data for Force and Temperature
  const [metrics, setMetrics] = useState([
    { id: '-O2KTOMxuSwFh6vCOArM', metric: 'Force', value: '0.02', timestamp: '2024-07-23T10:00:00Z' },
    { id: '-O2KTOjYT31UwHE_qggj', metric: 'Force', value: '0.01', timestamp: '2024-07-23T10:05:00Z' },
    { id: '-O2KTP69sI0yDY6iJrAH', metric: 'Force', value: '0.01', timestamp: '2024-07-23T10:10:00Z' },
    { id: '-O2KTU6iTGvAuQ6YtIUj', metric: 'Force', value: '0.39', timestamp: '2024-07-23T10:15:00Z' },
    { id: '-O2KTWRMflmop2QUmMPK', metric: 'Force', value: '0.1', timestamp: '2024-07-23T10:20:00Z' },
    { id: '-O2KTOIutveWIq3oq2N0', metric: 'Temp', value: '31.85', timestamp: '2024-07-23T10:25:00Z' },
    { id: '-O2KTOfYZpHhFHs8DuPm', metric: 'Temp', value: '32.41', timestamp: '2024-07-23T10:30:00Z' },
    { id: '-O2KTP2BfI0ve586NcKx', metric: 'Temp', value: '32.32', timestamp: '2024-07-23T10:35:00Z' },
    { id: '-O2KTU2j_OGWmsp8vt4k', metric: 'Temp', value: '31.75', timestamp: '2024-07-23T10:40:00Z' },
    { id: '-O2KTWNLgewyBdjGVzZC', metric: 'Temp', value: '31.75', timestamp: '2024-07-23T10:45:00Z' }
  ]);

  const [chartData, setChartData] = useState({ datasets: [] });

  useEffect(() => {
    const forceData = metrics.filter(item => item.metric === 'Force');
    const tempData = metrics.filter(item => item.metric === 'Temp');

    setChartData({
      labels: [...new Set([...forceData, ...tempData].map(item => new Date(item.timestamp).toLocaleDateString()))],
      datasets: [
        {
          label: 'Force (N)',
          data: forceData.map(item => parseFloat(item.value)),
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 2,
          fill: true
        },
        {
          label: 'Temperature (°F)',
          data: tempData.map(item => parseFloat(item.value)),
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderWidth: 2,
          fill: true
        }
      ]
    });
  }, [metrics]);

  return (
    <div className="h-screen w-full p-6 bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Athlete Health Monitoring Reports</h1>
        
        <p className="text-gray-700 mb-6">
          The following reports provide insights into the health and performance of athletes based on real-time data collected through various sensors. Visualizations are provided for Force and Temperature metrics to help in analyzing trends and making informed decisions.
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Metrics Visualization</h2>
          <Line
            data={chartData}
            options={{
              scales: {
                x: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Date'
                  }
                },
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Value'
                  }
                }
              },
              plugins: {
                legend: {
                  display: true
                }
              }
            }}
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Detailed Metrics Table</h2>
          <table className="min-w-full bg-white divide-y divide-gray-200">
            <thead>
              <tr className="bg-blue-50">
                <th className="p-4 text-left text-blue-600 font-semibold">ID</th>
                <th className="p-4 text-left text-blue-600 font-semibold">Metric</th>
                <th className="p-4 text-left text-blue-600 font-semibold">Value</th>
                <th className="p-4 text-left text-blue-600 font-semibold">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {metrics.length > 0 ? (
                metrics.map((metric) => (
                  <tr key={metric.id} className="hover:bg-blue-100 transition-colors duration-200">
                    <td className="p-4 text-gray-700">{metric.id}</td>
                    <td className="p-4 text-gray-700">{metric.metric}</td>
                    <td className="p-4 text-gray-700">{metric.value}</td>
                    <td className="p-4 text-gray-700">{new Date(metric.timestamp).toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-700">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;