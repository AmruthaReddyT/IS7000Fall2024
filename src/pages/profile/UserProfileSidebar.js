

import React from 'react';
import { FaFacebook, FaUserCircle } from 'react-icons/fa';

function UserProfileSidebar() {
    const user = {
        name: 'Deepa',
        username: 'deepa007',
        email: 'deepa@email.com',
        profilePicture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-1024.png',
    };

    return (
        <div className="bg-gray-800 text-white w-72 p-8 flex flex-col items-center shadow-lg">
            <img
                src={user.profilePicture}
                alt="Profile"
                className="rounded-full w-24 h-24 mb-4 border-4 border-white"
            />
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-400">@{user.username}</p>
            <p className="text-gray-400 mt-2">{user.email}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-600 transition duration-300">
                <FaFacebook className="mr-2" /> Facebook
            </button>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">
                Visit Profile
            </button>
        </div>
    );
}

export default UserProfileSidebar;
