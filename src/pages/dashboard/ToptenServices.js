import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ToptenServices() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get(
                    'http://3.218.8.102/api/services?page=0&size=20&sort=id,asc&cacheBuster=1732505483643'
                );
                setServices(response.data.slice(0, 10)); 
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    if (loading) {
        return <div className="text-center mt-6">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-6 text-red-600">Error: {error}</div>;
    }

    return (
        <div className="bg-gray-100 p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Top 10 Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                    >
                        <h3 className="text-xl font-bold text-gray-700">{service.name}</h3>
                        <p className="text-gray-500 mt-2">Level: {service.level}</p>
                        <p className="text-gray-500 mt-2">Interval: {service.interval}</p>
                        <p className="text-teal-700 font-semibold mt-4">Price: ${service.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToptenServices;
