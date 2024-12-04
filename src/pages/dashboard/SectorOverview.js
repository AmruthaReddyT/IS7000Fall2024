import React from 'react';

function SectorOverview() {
    const topGainers = [
        { name: 'APP', price: '246.53', change: '+77.98 (+46.27%)' },
        { name: 'IONQ', price: '22.11', change: '+5.66 (+34.41%)' },
        { name: 'FRSH', price: '16.82', change: '+3.73 (+28.50%)' },
        { name: 'BROS', price: '44.77', change: '+9.83 (+28.13%)' },
        { name: 'UAA', price: '11.13', change: '+2.38 (+27.20%)' },
    ];

    const topLosers = [
        { name: 'XRAY', price: '17.26', change: '-6.72 (-28.02%)' },
        { name: 'DJTWW', price: '19.89', change: '-7.31 (-26.88%)' },
        { name: 'YOU', price: '28.53', change: '-9.92 (-25.80%)' },
        { name: 'DJT', price: '27.70', change: '-8.26 (-22.97%)' },
        { name: 'MTCH', price: '31.11', change: '-6.77 (-17.87%)' },
    ];

    const mostActive = [
        { name: 'NVDA', price: '148.88', change: '+3.27 (+2.25%)' },
        { name: 'PLTR', price: '55.88', change: '+0.35 (+0.63%)' },
        { name: 'TSLA', price: '296.91', change: '+8.83 (+2.90%)' },
        { name: 'SMCI', price: '25.48', change: '+2.78 (+12.25%)' },
        { name: 'INTC', price: '26.23', change: '+1.18 (+4.71%)' },
    ];

    const stockData = [
        { name: 'AAPL', priceChange: 1.2 },
        { name: 'GOOGL', priceChange: -0.8 },
        { name: 'AMZN', priceChange: 3.1 },
        { name: 'MSFT', priceChange: -2.5 },
        { name: 'TSLA', priceChange: 5.0 },
        { name: 'NVDA', priceChange: -1.3 },
        { name: 'NFLX', priceChange: 4.2 },
        { name: 'META', priceChange: -3.0 },
        { name: 'DIS', priceChange: 0.5 },
        { name: 'INTC', priceChange: -0.2 },
        { name: 'CSCO', priceChange: 1.8 },
        { name: 'WMT', priceChange: -1.5 },
        { name: 'PYPL', priceChange: 2.4 },
        { name: 'SQ', priceChange: -2.0 },
        { name: 'NVDA', priceChange: 2.8 },
        { name: 'ZM', priceChange: -1.1 },
        { name: 'ADBE', priceChange: 4.6 },
        { name: 'TSM', priceChange: -0.3 },
        { name: 'BABA', priceChange: 6.3 },
        { name: 'UBER', priceChange: -2.1 },
        { name: 'BA', priceChange: 0.2 },
        { name: 'V', priceChange: -0.5 },
        { name: 'MA', priceChange: 3.8 },
        { name: 'IBM', priceChange: -1.0 },
        { name: 'CRM', priceChange: 2.0 },
        { name: 'SPOT', priceChange: -3.5 },
        { name: 'GS', priceChange: 0.9 },
        { name: 'AMAT', priceChange: -0.4 },
        { name: 'LMT', priceChange: 5.2 },
        { name: 'VZ', priceChange: -2.3 },
    ];

    const getBackgroundColor = (priceChange) => {
        if (priceChange > 0) {
          // Shades of green for positive change
          return `rgba(34, 197, 94, ${Math.min(priceChange / 10, 1)})`;
        } else {
          // Shades of red for negative change
          return `rgba(239, 68, 68, ${Math.min(Math.abs(priceChange) / 10, 1)})`;
        }
      };

    return (
        <div className="min-h-screen bg-rose-400 flex flex-col items-center p-4">
            <h1 className="text-3xl font-bold mb-6">Sector Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4">Top Gainers</h2>
                    {topGainers.map((stock) => (
                        <div key={stock.name} className="flex justify-between items-center mb-2">
                            <p className="font-semibold">{stock.name}</p>
                            <div className="text-right">
                                <p>{stock.price}</p>
                                <p className="text-green-600">{stock.change}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4">Top Losers</h2>
                    {topLosers.map((stock) => (
                        <div key={stock.name} className="flex justify-between items-center mb-2">
                            <p className="font-semibold">{stock.name}</p>
                            <div className="text-right">
                                <p>{stock.price}</p>
                                <p className="text-red-600">{stock.change}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4">Most Active</h2>
                    {mostActive.map((stock) => (
                        <div key={stock.name} className="flex justify-between items-center mb-2">
                            <p className="font-semibold">{stock.name}</p>
                            <div className="text-right">
                                <p>{stock.price}</p>
                                <p className="text-green-600">{stock.change}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Heat Map Overview Section */}
            <div className="bg-white p-4 mt-2 rounded-lg shadow-md">
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {stockData.map((stock, index) => (
                    <div
                    key={index}
                    className="p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105"
                    style={{ backgroundColor: getBackgroundColor(stock.priceChange) }}
                    >
                    <h3 className="text-lg font-semibold text-gray-800">{stock.name}</h3>
                    <p className="text-gray-700">
                    {stock.priceChange > 0 ? '+' : ''}
                    {stock.priceChange}%
                    </p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SectorOverview;
