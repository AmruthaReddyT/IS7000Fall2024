import React, { useState, useEffect } from 'react';
const SubscriptionAdminscrum3 = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  // Simulate fetching data from an API
  useEffect(() => {
    const fetchSubscriptions = async () => {
      setLoading(true);
      // Simulating an API call with setTimeout
      setTimeout(() => {
        setSubscriptions([
          { id: 1, name: 'Basic Plan', price: '$10/month' },
          { id: 2, name: 'Pro Plan', price: '$20/month' },
          { id: 3, name: 'Enterprise Plan', price: '$50/month' },
        ]); //scrum-3
        setLoading(false);
      }, 1000);
    };
    fetchSubscriptions();
  }, []);
  // Function to handle deletion of a subscription
  const deleteSubscription = (id) => {
    setSubscriptions(subscriptions.filter((subscription) => subscription.id !== id));
  };
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Manage Subscriptions</h2>
      {/* Loading indicator */}
      {loading ? (
        <p className="text-gray-500">Loading subscriptions...</p>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-4">
          {subscriptions.length === 0 ? (
            <p className="text-gray-500">No subscriptions available.</p>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="border-b p-2 text-gray-600">Plan Name</th>
                  <th className="border-b p-2 text-gray-600">Price</th>
                  <th className="border-b p-2 text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((subscription) => (
                  <tr key={subscription.id} className="hover:bg-gray-50">
                    <td className="border-b p-2">{subscription.name}</td>
                    <td className="border-b p-2">{subscription.price}</td>
                    <td className="border-b p-2">
                      <button
                        onClick={() => deleteSubscription(subscription.id)}
                        className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};
export default SubscriptionAdminscrum3;






