import React from 'react';

function MarketOverviewHome() {

    const markets = [
        { name: 'S&P Futures', value: '6,004.25', change: '+0.50 (+0.01%)', trend: 'up' },
        { name: 'Dow Futures', value: '43,912.00', change: '+2.00 (+0.00%)', trend: 'up' },
        { name: 'Nasdaq Futures', value: '21,230.50', change: '+5.75 (+0.03%)', trend: 'up' },
        { name: 'Russell 2000', value: '2,398.70', change: '+3.00 (+0.13%)', trend: 'up' },
        { name: 'Crude Oil', value: '72.01', change: '-0.35 (-0.48%)', trend: 'down' },
        { name: 'Gold', value: '2,705.70', change: '-0.10 (-0.00%)', trend: 'down' },
    ];

    return (
        <div className="w-full max-w-lg mx-auto mt-6">
            <h2 className="text-2xl font-semibold text-center mb-4">Market Overview</h2>

            <div className="bg-white p-6 rounded-lg shadow-lg">

                <div className="flex justify-around border-b border-gray-300 mb-4 text-gray-500 pb-2">
                    <button className="font-semibold text-blue-600">US</button>
                    <button>Europe</button>
                    <button>Asia</button>
                    <button>Rates</button>
                    <button>Commodities</button>
                </div>

                <div className="grid grid-cols-3 gap-y-4">
                    {markets.map((market) => (
                        <div key={market.name} className="flex flex-col items-center text-center">
                            <h3 className="font-semibold text-sm">{market.name}</h3>
                            <p className="text-lg font-bold">{market.value}</p>
                            <p className={`${market.trend === 'up' ? 'text-green-600' : 'text-red-600'} text-sm`}>
                                {market.change}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MarketOverviewHome;