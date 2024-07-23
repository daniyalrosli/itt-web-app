import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase';

const Data = () => {
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

  return (
    <div className="h-screen w-full p-6 bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-x-auto">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6 p-4 border-b">Force Data</h2>
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead>
            <tr className="bg-blue-50">
              <th className="p-4 text-left text-blue-600 font-semibold">ID</th>
              <th className="p-4 text-left text-blue-600 font-semibold">Value</th>
            </tr>
          </thead>
          <tbody>
            {forceData.length > 0 ? (
              forceData.map((item) => (
                <tr key={item.id} className="hover:bg-blue-100 transition-colors duration-200">
                  <td className="p-4 text-gray-700">{item.id}</td>
                  <td className="p-4 text-gray-700">{item.value}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="p-4 text-center text-gray-700">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-x-auto mt-6">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6 p-4 border-b">Temperature Data</h2>
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead>
            <tr className="bg-blue-50">
              <th className="p-4 text-left text-blue-600 font-semibold">ID</th>
              <th className="p-4 text-left text-blue-600 font-semibold">Value</th>
            </tr>
          </thead>
          <tbody>
            {tempData.length > 0 ? (
              tempData.map((item) => (
                <tr key={item.id} className="hover:bg-blue-100 transition-colors duration-200">
                  <td className="p-4 text-gray-700">{item.id}</td>
                  <td className="p-4 text-gray-700">{item.value}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="p-4 text-center text-gray-700">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Data;
