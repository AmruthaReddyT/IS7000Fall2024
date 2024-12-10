import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TopSubscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get(
          'http://3.218.8.102/api/subscriptions?page=0&size=20&sort=id,asc'
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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Top Subscriptions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subscriptions.map((subscription) => (
          <div key={subscription.id} className="bg-gray-100 p-4 rounded-md shadow">
            <h3 className="text-lg font-bold">{subscription.name}</h3>
            <p>Status: {subscription.status}</p>
            <p>Subscription Date: {subscription.subdate}</p>
            {subscription.service && (
              <p>
                Service: {subscription.service.name} - ${subscription.service.price.toFixed(2)}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopSubscriptions;
