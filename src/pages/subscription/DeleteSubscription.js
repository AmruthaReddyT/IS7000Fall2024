import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DeleteSubscription() {
  const [subscriptions, setSubscriptions] = useState([]);
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

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this subscription?");
    if (isConfirmed) {
      try {
        await axios.delete(`http://3.218.8.102/api/subscriptions/${id}`);
        setSubscriptions((prev) => prev.filter((subscription) => subscription.id !== id));
        alert('Subscription deleted successfully!');
      } catch (err) {
        alert('Error deleting subscription: ' + err.message);
      }
    }
  };

  if (loading) {
    return <div className="text-center mt-6">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-6 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      {subscriptions.length > 0 ? (
        <div className="w-full max-w-2xl space-y-4">
          {subscriptions.map((subscription) => (
            <div
              key={subscription.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
            >
              <div>
                <h2 className="text-lg font-semibold">{subscription.name}</h2>
                <p className="text-gray-600">Status: {subscription.status}</p>
                {subscription.service && <p className="text-gray-600">Service: {subscription.service.name}</p>}
              </div>
              <button
                onClick={() => handleDelete(subscription.id)}
                className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-md font-semibold"
              >
                Cancel Subscription
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-8">You have no subscriptions to delete.</p>
      )}
    </div>
  );
}

export default DeleteSubscription;
