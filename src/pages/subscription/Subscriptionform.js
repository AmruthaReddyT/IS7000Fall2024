import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopFiveSubscriptions from './TopFiveSubscriptions';

function Subscriptionform() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [subscriptionPlans, setSubscriptionPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubscriptionPlans = async () => {
      try {
        const response = await axios.get('http://3.218.8.102/api/subscriptions?page=0&size=20&sort=id,asc');
        setSubscriptionPlans(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSubscriptionPlans();
  }, []);

  const handleSubscribeNow = (plan) => {
    setSelectedPlan(plan);
    setShowPaymentForm(true);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log('Payment details submitted for:', selectedPlan.name);
  };

  if (loading) {
    return <div className="text-center mt-6">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-6 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">Top Subscriptions</h1>

      <div className="flex justify-center items-start p-6 bg-gray-100 min-h-screen">
        {!showPaymentForm ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {subscriptionPlans.map((plan) => (
              <div key={plan.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-center">{plan.name}</h3>
                <p className="text-center text-xl font-bold">
                  ${plan.service?.price?.toFixed(2) || 'N/A'}
                </p>
                <p className="text-center text-sm text-gray-500">
                  Subscription Date: {new Date(plan.subdate).toLocaleDateString() || 'N/A'}
                </p>
                <p className="text-center text-gray-600">
                  Status: {plan.status || 'N/A'}
                </p>
                <button
                  onClick={() => handleSubscribeNow(plan)}
                  className="w-full mt-6 bg-black text-white py-2 rounded-md font-semibold"
                >
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-2xl">
            <h1 className="text-2xl font-bold mb-6">Complete Your Subscription</h1>
            <h2 className="text-lg font-semibold mb-4">{selectedPlan.name}</h2>
            <p className="text-gray-700 mb-2"><strong>Price:</strong> ${selectedPlan.service?.price?.toFixed(2) || 'N/A'}</p>
            <p className="text-gray-700 mb-4"><strong>Subscription Date:</strong> {new Date(selectedPlan.subdate).toLocaleDateString() || 'N/A'}</p>

            <form onSubmit={handlePaymentSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Cardholder Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Card Number</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Expiry Month</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md" required>
                    <option value="">Select Month</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Expiry Year</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md" required>
                    <option value="">Select Year</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">CVC</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-semibold mt-6">
                SUBSCRIBE NOW
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Subscriptionform;
