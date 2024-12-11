import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ToptenSubscriptions() {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSubscriptions = async () => {
            try {
                const response = await axios.get(
                    'http://3.218.8.102/api/subscriptions?page=0&size=20&sort=id,asc&cacheBuster=1732506730093'
                );
                setSubscriptions(response.data);
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
        <div className="bg-gray-100 p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">All Subscriptions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {subscriptions.map((sub) => (
                    <div
                        key={sub.id}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                    >
                        <h3 className="text-xl font-bold text-gray-700">{sub.name}</h3>
                        <p className="text-gray-500 mt-2">Date: {sub.subdate}</p>
                        <p className="text-gray-500 mt-2">Status: {sub.status}</p>
                        {sub.service && (
                            <p className="text-teal-700 font-semibold mt-4">
                                Service: {sub.service.name} - ${sub.service.price.toFixed(2)}
                            </p>
                        )}
                        {sub.user && (
                            <p className="text-gray-500 mt-2">
                                User: {sub.user.firstName} {sub.user.lastName} ({sub.user.email})
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToptenSubscriptions;
