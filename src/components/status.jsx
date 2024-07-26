import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase';

const Status = () => {
  const [forceData, setForceData] = useState([]);
  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    const forceRef = ref(database, 'Force');
    const tempRef = ref(database, 'Temp');

    const unsubscribeForce = onValue(forceRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dataArray = Object.keys(data).map(key => ({
          id: key,
          value: data[key]
        }));
        setForceData(dataArray);
      } else {
        setForceData([]);
      }
    }, (error) => {
      console.error("Error fetching force data: ", error);
      setForceData([]);
    });

    const unsubscribeTemp = onValue(tempRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dataArray = Object.keys(data).map(key => ({
          id: key,
          value: data[key]
        }));
        setTempData(dataArray);
      } else {
        setTempData([]);
      }
    }, (error) => {
      console.error("Error fetching temp data: ", error);
      setTempData([]);
    });

    return () => {
      unsubscribeForce();
      unsubscribeTemp();
    };
  }, []);

  const latestTemp = tempData.length > 0 ? tempData[tempData.length - 1].value : 'N/A';
  const latestForce = forceData.length > 0 ? forceData[forceData.length - 1].value : 'N/A';

  const status = latestTemp > 35 || latestForce > 20 ? 'danger' : 'normal';
  const statusColor = status === 'danger' ? 'text-red-600' : 'text-green-600';

  return (
    <div className="h-screen w-full p-6 bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-x-auto">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6 p-4 border-b">Status Section</h2>
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead>
            <tr className="bg-blue-50">
              <th className="p-4 text-left text-blue-600 font-semibold">Metric</th>
              <th className="p-4 text-left text-blue-600 font-semibold">Latest Value</th>
              <th className="p-4 text-left text-blue-600 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-blue-100 transition-colors duration-200">
              <td className="p-4 text-gray-700">Temperature</td>
              <td className="p-4 text-gray-700">{latestTemp}</td>
              <td className={`p-4 font-semibold ${statusColor}`}>{status}</td>
            </tr>
            <tr className="hover:bg-blue-100 transition-colors duration-200">
              <td className="p-4 text-gray-700">Force</td>
              <td className="p-4 text-gray-700">{latestForce}</td>
              <td className={`p-4 font-semibold ${statusColor}`}>{status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Status;