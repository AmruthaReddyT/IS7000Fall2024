import EditSubscription from './EditSubscription';

import React, { useState } from 'react';
import TopFiveSubscriptions from './TopFiveSubscriptions';
import SubscriptionPlans from './Subscriptionform';
import DeleteSubscription from './DeleteSubscription';
import TopServices from './TopServices';
import TopSubscriptions from './TopSubscriptions';
import SubscriptionList from './SubscriptionList';
import EditService from './EditService';

function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-8">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        <TopServices />
      </div>
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        <TopSubscriptions />
      </div>
      <h1 className="text-4xl font-bold mb-8 text-center text-black">Manage Subscriptions</h1>
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        <DeleteSubscription />
        <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
          <EditSubscription />
        </div>

        <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
          <TopFiveSubscriptions />
        </div>
        <div className="flex justify-center items-start p-6 bg-gray-100 min-h-screen">
          <SubscriptionPlans />
        </div>
        <div className="flex justify-center items-start p-6 bg-gray-100 min-h-screen">
          <SubscriptionList />
          <EditService />
        </div>
      </div>
    </div>
  );
}
export default Subscription;