import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ViewSubscription from './ViewSubscription';

function SubscriptionList() {
    const [subscriptions, setSubscriptions] = useState([]);
    const [viewingSubscriptionId, setViewingSubscriptionId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSubscriptions = async () => {
            try {
                const response = await axios.get('http://3.218.8.102/api/subscriptions?page=0&size=20&sort=id,asc');
                setSubscriptions(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchSubscriptions();
    }, []);

    const handleView = (id) => {
        setViewingSubscriptionId(id);
    };

    const handleBack = () => {
        setViewingSubscriptionId(null);
    };

    const handleEdit = () => {
        alert('Redirect to edit form');
    };

    if (loading) {
        return <div className="text-center mt-6">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-6 text-red-600">Error: {error}</div>;
    }

    if (viewingSubscriptionId) {
        return (
            <ViewSubscription
                subscriptionId={viewingSubscriptionId}
                onBack={handleBack}
                onEdit={handleEdit}
            />
        );
    }

    return (
        <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Subscriptions</h1>
            <div className="w-full max-w-4xl space-y-4">
                {subscriptions.map((subscription) => (
                    <div key={subscription.id} className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-lg font-semibold">{subscription.name}</h2>
                                <p className="text-gray-600">{subscription.status}</p>
                            </div>
                            <button
                                onClick={() => handleView(subscription.id)}
                                className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded-md font-semibold"
                            >
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SubscriptionList;
