import React from 'react';

const Data = () => {
  // Dummy data for illustration
  const dummyData = [
    { id: 1, metric: 'Heart Rate', value: '80 bpm' },
    { id: 2, metric: 'Temperature', value: '98.6°F' },
  ];

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Data</h2>
      <ul>
        {dummyData.map((data) => (
          <li key={data.id} className="border-b py-2">
            <span className="font-semibold">{data.metric}:</span> {data.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Data;