import React from 'react';

import SectorBarChart from './SectorBarChart';
import MarketOverviewHome from './MarketOverviewHome';
import ToptenSubscriptions from './ToptenSubscriptions';
import ToptenServices from "./ToptenServices";
import SectorOverviewHome from './SectorOverviewHome';
import ToptenTransactions from './TopTenTransactions';

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
            {/* Header */}
            <header className="w-full bg-blue-600 text-white py-4 px-8 shadow-md">
                <h1 className="text-3xl font-semibold text-center">MarketInsyte</h1>
            </header>

            {/* Hero Section */}
            <section
                className="w-full flex flex-col items-center py-16 px-6 bg-gradient-to-b from-blue-500 to-blue-700 text-white text-center"
            >
                <h2 className="text-4xl font-bold mb-4">Unlock Market Insights with Ease</h2>
                <p className="max-w-md text-lg">
                    MarketInsyte brings you the latest data-driven insights to help your business thrive. Discover
                    trends, analyze markets, and make informed decisions with ease.
                </p>
                <button
                    className="mt-8 px-6 py-3 bg-yellow-400 text-blue-800 rounded-full font-semibold hover:bg-yellow-500"
                >
                    Get Started
                </button>
            </section>

            {/* Features Section */}
            <section className="py-16 px-8 w-full max-w-screen-lg grid gap-8 md:grid-cols-3 text-center">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-blue-600">Real-Time Analytics</h3>
                    <p className="mt-2 text-gray-600">Gain access to up-to-the-minute market trends and data.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-blue-600">Data-Driven Insights</h3>
                    <p className="mt-2 text-gray-600">Transform raw data into actionable insights effortlessly.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-blue-600">Customizable Dashboards</h3>
                    <p className="mt-2 text-gray-600">Visualize data the way you need with intuitive dashboards.</p>
                </div>
            </section>

            {/* Main Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


                 <SectorBarChart />
                <MarketOverviewHome />
                 <SectorOverviewHome />
                <ToptenTransactions />
                <ToptenSubscriptions />
                <ToptenServices />
                <ToptenTransactions />
            </div>

            {/* Footer */}
            <footer className="w-full bg-gray-800 text-white py-6 text-center">
                <p>© {new Date().getFullYear()} MarketInsyte. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
