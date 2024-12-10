import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TopFiveSubscriptions() {
    const [topSubscriptions, setTopSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSubscriptions = async () => {
            try {
                const response = await axios.get('http://3.218.8.102/api/subscriptions?page=0&size=20&sort=id,asc');
                setTopSubscriptions(response.data.slice(0, 5));
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchSubscriptions();
    }, []);

    if (loading) {
        return <div className="text-center mt-6">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-6 text-red-600">Error: {error}</div>;
    }

    return (
        <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-center text-black">Top 5 Subscriptions</h1>
            <div className="flex overflow-x-auto space-x-6 px-4 py-8 w-full max-w-5xl">
                {topSubscriptions.map((subscription) => (
                    <div
                        key={subscription.id}
                        className="min-w-[250px] bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                    >
                        <h2 className="text-xl font-semibold mb-2">{subscription.name}</h2>
                        <p className="text-lg font-bold text-blue-600">${subscription.service?.price || 0}/month</p>
                        <p className="mt-2 text-gray-700">
                            Status: {subscription.status || 'N/A'}
                        </p>
                        {subscription.service && (
                            <p className="text-gray-600 mt-1">
                                Service: {subscription.service.name}
                            </p>
                        )}
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md font-semibold">
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopFiveSubscriptions;
