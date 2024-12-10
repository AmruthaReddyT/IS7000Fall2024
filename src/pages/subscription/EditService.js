import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EditService() {
    const serviceId = 1;
    const [service, setService] = useState(null);
    const [editedData, setEditedData] = useState({
        name: '',
        level: '',
        interval: '',
        price: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await axios.get(`http://3.218.8.102/api/services/${serviceId}`);
                setService(response.data);
                setEditedData({
                    name: response.data.name,
                    level: response.data.level,
                    interval: response.data.interval,
                    price: response.data.price
                });
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchService();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };

    const saveChanges = async () => {
        try {
            await axios.put(`http://3.218.8.102/api/services/${serviceId}`, {
                id: serviceId,
                ...editedData
            });
            alert('Service updated successfully');
        } catch (err) {
            alert('Error updating service: ' + err.message);
        }
    };

    if (loading) {
        return <div className="text-center mt-6">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-6 text-red-600">Error: {error}</div>;
    }

    return (
        <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Edit Service</h1>
            <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
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
                        <label className="block text-gray-700 font-semibold mb-2">Level</label>
                        <input
                            type="text"
                            name="level"
                            value={editedData.level}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Interval</label>
                        <input
                            type="text"
                            name="interval"
                            value={editedData.interval}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={editedData.price}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            onClick={saveChanges}
                            className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => window.history.back()}
                            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditService;
