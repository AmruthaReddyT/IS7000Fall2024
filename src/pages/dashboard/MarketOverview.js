
import React from 'react';
import SectorOverview from './SectorOverview';

function MarketOverview() {
  return (
    <div className="min-h-screen bg-rose-400 p-4">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-6">Market Overview</h1>
        <p className="text-lg mb-8">Overview of market trends and sector performance.</p>
      </div>
      <SectorOverview />
    </div>
  );
}

export default MarketOverview;
