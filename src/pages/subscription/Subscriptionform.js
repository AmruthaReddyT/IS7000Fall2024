import React, { useState } from 'react';
import TopFiveSubscriptions from './TopFiveSubscriptions';

function Subscriptionform() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const subscriptionPlans = [
    {
      id: 'all-access',
      name: 'All Access',
      price: '$1.50/week',
      billed: 'Billed as $6 every 4 weeks for the first year',
      description: [
        'News: Engage with expert reporting, including culture coverage and analysis.',
        'Games: Unwind with Spelling Bee, Wordle, The Crossword and more.',
        'Cooking: Enjoy delicious recipes, advice and inspiration daily.',
        'Wirecutter: Choose products confidently with reviews and real-world testing.',
        'The Athletic: Follow in-depth, personalized coverage of your favorite sports.',
      ],
    },
    {
      id: 'news',
      name: 'News',
      price: '$1/week',
      billed: 'Billed as $4 every 4 weeks for the first year',
      description: [
        'News: Engage with expert reporting, including culture coverage and analysis.',
        'Games: Unwind with Spelling Bee, Wordle, The Crossword and more.',
        'Cooking: Enjoy delicious recipes, advice and inspiration daily.',
        'Wirecutter: Choose products confidently with reviews and real-world testing.',
        'The Athletic: Follow in-depth, personalized coverage of your favorite sports.',
      ],
    },
  ];

  const handleSubscribeNow = (plan) => {
    setSelectedPlan(plan);
    setShowPaymentForm(true);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log('Payment details submitted');
  };

  return (

    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">Top Subscriptions</h1>

      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        <TopFiveSubscriptions />
      </div>

      <div className="flex justify-center items-start p-6 bg-gray-100 min-h-screen">
        {!showPaymentForm ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {subscriptionPlans.map((plan) => (
              <div key={plan.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-center">{plan.name}</h3>
                <p className="text-center text-xl font-bold">{plan.price}</p>
                <p className="text-center text-sm text-gray-500">{plan.billed}</p>
                <ul className="mt-4 list-disc list-inside text-sm text-gray-600">
                  {plan.description.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
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
            <p className="text-gray-700 mb-2"><strong>Price:</strong> {selectedPlan.price}</p>
            <p className="text-gray-700 mb-4"><strong>Billed:</strong> {selectedPlan.billed}</p>

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

