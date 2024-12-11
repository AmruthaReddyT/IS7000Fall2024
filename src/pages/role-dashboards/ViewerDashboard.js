import React from 'react';

const ViewerDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            {/* Header */}
            <header className="w-full bg-green-600 text-white py-4 px-8 shadow-md">
                <h1 className="text-3xl font-semibold text-center">Viewer Dashboard</h1>
            </header>

            {/* Main Content */}
            <section className="py-16 px-6 w-full max-w-screen-lg">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
                    Welcome, Viewer!
                </h2>
                <p className="text-center text-gray-600">
                    As a viewer, you can browse and view content on the platform.
                </p>
                <div className="mt-10 flex justify-center">
                    <button
                        className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition duration-300"
                        onClick={() => alert('Redirecting to content browsing...')}
                    >
                        Browse Content
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-gray-800 text-white py-6 text-center">
                <p>© {new Date().getFullYear()} MarketInsyte. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default ViewerDashboard;
