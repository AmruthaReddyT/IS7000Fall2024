import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MarketOverviewHome() {
    const [markets, setMarkets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const response = await axios.get(
                    'http://3.218.8.102/api/market-overviews?page=0&size=20&sort=id,asc&cacheBuster=1732506875857'
                );
                setMarkets(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchMarketData();
    }, []);

    if (loading) {
        return <div className="text-center mt-6">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-6 text-red-600">Error: {error}</div>;
    }

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
                        <div key={market.id} className="flex flex-col items-center text-center">
                            <h3 className="font-semibold text-sm">{market.name}</h3>
                            <p className="text-lg font-bold">${market.price.toFixed(2)}</p>
                            <p
                                className={`${market.change > 0 ? 'text-green-600' : 'text-red-600'
                                    } text-sm`}
                            >
                                {market.change > 0 ? '+' : ''}
                                {market.change.toFixed(2)}
                            </p>
                            <p className="text-gray-500 text-xs">{market.marketdate}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MarketOverviewHome;
