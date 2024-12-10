import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewSubscription({ subscriptionId, onBack, onEdit }) {
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const response = await axios.get(`http://3.218.8.102/api/subscriptions/${subscriptionId}`);
        setSubscription(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSubscription();
  }, [subscriptionId]);

  if (loading) {
    return <div className="text-center mt-6">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-6 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Subscription Details</h1>
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Name</h2>
          <p className="text-gray-700">{subscription.name}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Status</h2>
          <p className="text-gray-700">{subscription.status}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Subscription Date</h2>
          <p className="text-gray-700">{subscription.subdate}</p>
        </div>
        {subscription.service && (
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Service</h2>
            <p className="text-gray-700">{`${subscription.service.name} - $${subscription.service.price.toFixed(
              2
            )}`}</p>
          </div>
        )}
        {subscription.user && (
          <div className="mb-4">
            <h2 className="text-lg font-semibold">User</h2>
            <p className="text-gray-700">{`${subscription.user.firstName} ${subscription.user.lastName}`}</p>
            <p className="text-gray-700">{subscription.user.email}</p>
          </div>
        )}
        <div className="flex space-x-4">
          <button
            onClick={onEdit}
            className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold"
          >
            Edit
          </button>
          <button
            onClick={onBack}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md font-semibold"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewSubscription;
