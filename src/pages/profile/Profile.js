import React, { useState, useEffect } from 'react';
import MailingAddressUpdate from './MailingAddressUpdate';
import CommunicationPreferences from './CommunicationPreferences';
import UserProfileSidebar from './UserProfileSidebar';
import UserProfileDetails from './UserProfileDetails';
import ProfileUpdateForm from './ProfileUpdateForm';
import axios from 'axios';

function Profile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('http://3.218.8.102/api/account');
        setUserInfo(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load user information.');
        setLoading(false);
      }
    };
    fetchUserInfo();
  }, []);

  const handleEditSuccess = () => {
    setIsEditing(false);
  };

  if (loading) {
    return <p className="text-center text-gray-600 mt-6">Loading user information...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600 mt-6">{error}</p>;
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <UserProfileSidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile Details</h1>
        <UserProfileDetails />

        <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-2xl">
          <br></br>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Profile Information</h2>
          <p className="text-gray-600 mb-2">
            <strong>Name:</strong> {userInfo.firstName} {userInfo.lastName}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> {userInfo.email}
          </p>
          <p className="text-gray-600">
            <strong>Username:</strong> {userInfo.login}
          </p>
        </div>

        {isEditing ? (
          <ProfileUpdateForm
            userInfo={userInfo}
            onSuccess={handleEditSuccess}
          />
        ) : (
          <div className="space-y-4 mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
            >
              Edit Personal Information
            </button>
          </div>
        )}
      </div>

      <h1 className="text-4xl font-bold mb-6 text-gray-700">Profile Page</h1>

      <div className="w-full max-w-2xl">
        <div className="flex space-x-4 mb-4 border-b">
          <button
            className={`py-2 px-4 ${activeTab === 'profile' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile Info
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'preferences' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('preferences')}
          >
            Communication Preferences
          </button>
        </div>

        {activeTab === 'profile' && (
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Profile Information</h2>
            <p className="text-gray-600 mb-2">Name: {userInfo.firstName} {userInfo.lastName}</p>
            <p className="text-gray-600 mb-2">Email: {userInfo.email}</p>
            <p className="text-gray-600">Subscription Plan: Premium</p>
          </div>
        )}

        {activeTab === 'preferences' && (
          <CommunicationPreferences />
        )}
      </div>

      <MailingAddressUpdate />
    </div>
  );
}

export default Profile;
