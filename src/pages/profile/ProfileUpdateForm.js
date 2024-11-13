import React, { useState } from 'react';

function ProfileUpdateForm() {
    const [formData, setFormData] = useState({
        name: 'Nandu Reddy',
        email: 'nandureddy@gmail.com',
        phone: '+1-111-111-1111',
        address: '1234 Elm St, New York, NY',
        city: 'New York',
        state: 'NY',
        zip: '10001',
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated Information:', formData);
        setShowSuccessMessage(true);

        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300">
            <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-lg">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Update Personal Information</h1>


                {showSuccessMessage && (
                    <div className="bg-green-100 text-green-800 p-3 rounded-md mb-4">
                        Profile updated successfully!
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="flex gap-4">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">State</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">ZIP Code</label>
                        <input
                            type="text"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ProfileUpdateForm;
