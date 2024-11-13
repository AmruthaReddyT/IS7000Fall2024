import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCity, FaGlobeAmericas, FaEnvelope, FaSave } from 'react-icons/fa';

function MailingAddressUpdate() {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSaveAddress = () => {
        console.log({ address, city, state, postalCode, country });
        setSuccessMessage('Your mailing address has been updated!');
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-8 rounded-xl shadow-md max-w-xl mx-auto mt-10">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4 text-center">Update Mailing Address</h2>
            <form className="space-y-5">
                <div className="flex items-center bg-white p-3 rounded-lg shadow-inner">
                    <FaMapMarkerAlt className="text-blue-500 mr-3" />
                    <input
                        type="text"
                        placeholder="Street Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-2 outline-none text-gray-700"
                        required
                    />
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-inner">
                    <FaCity className="text-blue-500 mr-3" />
                    <input
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full p-2 outline-none text-gray-700"
                        required
                    />
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-inner">
                    <FaEnvelope className="text-blue-500 mr-3" />
                    <input
                        type="text"
                        placeholder="State"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full p-2 outline-none text-gray-700"
                        required
                    />
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-inner">
                    <FaEnvelope className="text-blue-500 mr-3" />
                    <input
                        type="text"
                        placeholder="Postal Code"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="w-full p-2 outline-none text-gray-700"
                        required
                    />
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-inner">
                    <FaGlobeAmericas className="text-blue-500 mr-3" />
                    <input
                        type="text"
                        placeholder="Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full p-2 outline-none text-gray-700"
                        required
                    />
                </div>
                <button
                    type="button"
                    onClick={handleSaveAddress}
                    className="flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-lg font-semibold mt-4 hover:from-indigo-500 hover:to-blue-500"
                >
                    <FaSave className="mr-2" /> Save Address
                </button>
            </form>
            {successMessage && (
                <p className="text-green-600 text-center mt-4 font-medium">{successMessage}</p>
            )}
        </div>
    );
}

export default MailingAddressUpdate;
