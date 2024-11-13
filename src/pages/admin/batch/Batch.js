import React, { useState } from 'react';

const Batch = () => {
  // Sample data for batches
  const [batches, setBatches] = useState([
    { id: 1, name: 'Batch A', description: 'Intro to Python', date: '2024-11-10' },
    { id: 2, name: 'Batch B', description: 'Advanced JavaScript', date: '2024-11-15' },
    { id: 3, name: 'Batch C', description: 'Data Science Fundamentals', date: '2024-11-20' },
  ]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl mb-8">Batch List</h1>
      <ul className="w-full max-w-2xl">
        {batches.map((batch) => (
          <li
            key={batch.id}
            className="bg-gray-800 p-4 mb-4 rounded shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-2xl">{batch.name}</h2>
            <p>{batch.description}</p>
            <p className="text-gray-400">{batch.date}</p>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Batch;
