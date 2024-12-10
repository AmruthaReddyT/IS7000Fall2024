import React, { useState } from 'react';
import axios from 'axios';

function CreateUserForm() {
    const [formData, setFormData] = useState({
        login: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        activated: true,
        authorities: ['ROLE_ADMIN'],
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://3.218.8.102/api/admin/users', formData);
            setSuccessMessage('User created successfully!');
            setErrorMessage('');
            setFormData({
                login: '',
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                activated: true,
                authorities: ['ROLE_ADMIN'],
            });
        } catch (error) {
            setSuccessMessage('');
            setErrorMessage('Failed to create user. Please try again.');
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Create New User</h3>

            {successMessage && (
                <div className="bg-green-100 text-green-800 p-3 rounded-md mb-4">
                    {successMessage}
                </div>
            )}
            {errorMessage && (
                <div className="bg-red-100 text-red-800 p-3 rounded-md mb-4">
                    {errorMessage}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Login</label>
                    <input
                        type="text"
                        name="login"
                        value={formData.login}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
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
                    <label className="block text-gray-700 font-semibold mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
                >
                    Create User
                </button>
            </form>
        </div>
    );
}

export default CreateUserForm;
