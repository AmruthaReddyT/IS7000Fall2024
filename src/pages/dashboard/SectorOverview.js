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
        </div>
    );
}

export default SectorOverview;
