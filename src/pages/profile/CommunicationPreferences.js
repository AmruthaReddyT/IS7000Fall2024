import React, { useState } from 'react';

function CommunicationPreferences() {
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [smsNotifications, setSmsNotifications] = useState(false);
    const [inAppNotifications, setInAppNotifications] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSavePreferences = () => {
        setSuccessMessage('Your communication preferences have been updated!');
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Update Communication Preferences</h1>

            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <form className="space-y-4">
                    <div>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={emailNotifications}
                                onChange={(e) => setEmailNotifications(e.target.checked)}
                                className="mr-2"
                            />
                            <span>Email Notifications</span>
                        </label>
                        <p className="text-gray-500 text-sm ml-6">Receive updates via email.</p>
                    </div>

                    <div>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={smsNotifications}
                                onChange={(e) => setSmsNotifications(e.target.checked)}
                                className="mr-2"
                            />
                            <span>SMS Notifications</span>
                        </label>
                        <p className="text-gray-500 text-sm ml-6">Receive updates via SMS.</p>
                    </div>

                    <div>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={inAppNotifications}
                                onChange={(e) => setInAppNotifications(e.target.checked)}
                                className="mr-2"
                            />
                            <span>In-App Notifications</span>
                        </label>
                        <p className="text-gray-500 text-sm ml-6">Receive updates within the app.</p>
                    </div>

                    <button
                        type="button"
                        onClick={handleSavePreferences}
                        className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 font-semibold hover:bg-blue-600"
                    >
                        Save Preferences
                    </button>
                </form>

                {successMessage && (
                    <p className="text-green-600 text-center mt-4">{successMessage}</p>
                )}
            </div>
        </div>
    );
}

export default CommunicationPreferences;
