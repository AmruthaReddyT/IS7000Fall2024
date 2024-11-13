import React, { useState } from 'react';

function EditSubscription() {
    const initialSubscriptions = [
        { id: '1', name: 'Premium Plan', price: '$15/month', description: 'Access to all premium features.' },
        { id: '2', name: 'Standard Plan', price: '$10/month', description: 'Access to standard features.' },
        { id: '3', name: 'Basic Plan', price: '$5/month', description: 'Access to basic features.' },
      ];
    
      const [subscriptions, setSubscriptions] = useState(initialSubscriptions);
      const [editMode, setEditMode] = useState(null);
      const [editedData, setEditedData] = useState({ name: '', price: '', description: '' });
    
      const startEditing = (subscription) => {
        setEditMode(subscription.id);
        setEditedData({ name: subscription.name, price: subscription.price, description: subscription.description });
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
      };
    
      const saveEdit = (id) => {
        const updatedSubscriptions = subscriptions.map((subscription) =>
          subscription.id === id ? { ...subscription, ...editedData } : subscription
        );
        setSubscriptions(updatedSubscriptions);
        setEditMode(null);
      };
    
      return (
        <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
          <h1 className="text-3xl font-bold mb-8">Edit Subscriptions</h1>
          <div className="w-full max-w-2xl space-y-4">
            {subscriptions.map((subscription) => (
              <div key={subscription.id} className="bg-white p-4 rounded-lg shadow-md">
                {editMode === subscription.id ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={editedData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Price</label>
                      <input
                        type="text"
                        name="price"
                        value={editedData.price}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Description</label>
                      <textarea
                        name="description"
                        value={editedData.description}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      ></textarea>
                    </div>
                    <button
                      onClick={() => saveEdit(subscription.id)}
                      className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditMode(null)}
                      className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md ml-2"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-lg font-semibold">{subscription.name}</h2>
                      <p className="text-gray-600">{subscription.price}</p>
                      <p className="text-gray-500">{subscription.description}</p>
                    </div>
                    <button
                      onClick={() => startEditing(subscription)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-4 rounded-md font-semibold"
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
}

export default EditSubscription;
