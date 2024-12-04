import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // For accessing URL params and navigation
import axios from 'axios';
const SubscriptionAdminscrum4 = () => {
  // State to hold the form data, loading state, and error handling
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    status: 'active',
  });
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To manage error state
  const { id } = useParams(); // Get the subscription ID from the URL for editing (if exists)
  const navigate = useNavigate(); // For navigation after the form submission
  // Fetch subscription data if updating (if id exists in URL)
  useEffect(() => {
    if (id) {
      setLoading(true); // Start loading when fetching data
      axios
        .get(`https://your-api-url.com/api/subscriptions/${id}`) // Get request to fetch subscription data by ID
        .then((response) => {
          setFormData(response.data); // Set the fetched data into formData state
          setLoading(false); // Stop loading after fetching data
        })
        .catch((err) => {
          setError('Error fetching subscription details'); // Set error if request fails
          setLoading(false); // Stop loading
        });
    } else {
      setLoading(false); // If no id in URL, no need to fetch data, just show the form
    }
  }, [id]);
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Determine whether we are creating or updating a subscription
    const request = id
      ? axios.put(`https://your-api-url.com/api/subscriptions/${id}`, formData) // Update request
      : axios.post('https://your-api-url.com/api/subscriptions', formData); // Create request
    request
      .then(() => {
        setLoading(false);
        navigate('/admin/subscriptions'); // Redirect to subscription list after successful submission
      })
      .catch((err) => {
        setLoading(false);
        setError('Error saving subscription'); // Display error if the submission fails
      });
  };
  // Return loading message or the form
  if (loading) return <div>Loading...</div>;
  return (
    <div className="max-w-md mx-auto p-5 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">
        {id ? 'Update Subscription' : 'Create Subscription'}
      </h2>
      {/* Error message */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Subscription Name */}
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* Price */}
        <div>
          <label className="block text-sm font-medium">Price (USD)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* Status */}
        <div>
          <label className="block text-sm font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          {id ? 'Update' : 'Create'} Subscription
        </button>
      </form>
    </div>
  );
};
export default SubscriptionAdminscrum4;