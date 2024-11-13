import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function SectorBarChart() {
  const data = {
    labels: [
      'Communication Services',
      'Information Technology',
      'Consumer Discretionary',
      'Real Estate',
      'Health Care',
      'Materials',
      'Consumer Staples',
      'Utilities',
      'Energy',
      'Industrials',
      'Financials',
    ],
    datasets: [
      {
        label: '% Price Change',
        data: [1.92, 1.83, 1.37, 1.19, 0.64, 0.50, 0.37, 0.15, -0.36, -0.60, -1.62],
        backgroundColor: data => (data.raw >= 0 ? '#4caf50' : '#e57373'),
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <h2 className="text-center font-bold text-xl mb-4">% Price Change by Sector</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default SectorBarChart;
